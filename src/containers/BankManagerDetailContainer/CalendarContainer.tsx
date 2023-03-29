import { useMemo, useState } from "react";
import { calendarNoteListDummy } from "../../assets/dataDummy/bankManagerDetailDummy";
import PendingManageCalendar, { PendingManageNote } from "../../components/templates/PendingManageCalendar"
import CustomModal from "~organisms/Modal";
import * as yup from 'yup';
import CreatePendingForm, { PendingFields } from "~organisms/CreatePendingForm";
import { useForm } from 'react-hook-form';
import { useAppSelector } from "../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPendingService, deletePendingService, getPendingService, updatePendingService } from "~services/pending";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import ModalBase from "~organisms/ModalBase";
import useDebounce from "~hooks/useDebounce";
import { BsCheckLg } from "react-icons/bs";
import PendingDetail, { PendingDetailTypes } from "~templates/PendingDetail";
import { isADate, numberToMoney } from "../../utils/funcs";
import { UpdatePendingParams } from "~services/pending/type";
import { Box, Typography } from "@mui/material";
import { getGroupBySlug } from "~services/group";
import Container from "~organisms/Container";
import Section from "~templates/Section";
import ExpenditureSummary from "~templates/ExpenditureSummary";

interface CalendarContainerProps {
}

const schema = yup.object({
  content: yup.string().required('Vui lòng nhập nội dung'),
  money: yup.number().default(0).required('Vui lòng nhập số ti'),
  time: yup.mixed().test('time', 'Thời gian không hợp lệ', (time) => {
    const [hours, minutes] = time;
    if (0 <= Number(hours) && Number(hours) < 24 && Number(minutes) < 60 && Number(minutes) >= 0) {
      return true;
    }
    return false;
  }),
  bank: yup.string().required('Vui lòng nhập tên ngân hàng'),
}).required();

const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  const queryClient = useQueryClient();
  const { currentGroup } = useAppSelector(state => state.system);

  const [isOpenCreatePendingModal, setIsOpenCreatePendingModal] = useState<boolean>(false);
  const [isOpenPendingDetailModal, setIsOpenPendingDetailModal] = useState<boolean>(false);
  const [isShowMonthSelect, setIsShowMonthSelect] = useState<boolean>(false);
  const [calendarViewDate, setCalendarViewDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedPendingUpdateModal, setSelectedPendingUpdateModal] = useState<string>();

  const calendarViewDateDebounce = useDebounce(calendarViewDate, 300);

  const method = useForm<PendingFields>({
    mode: 'onSubmit',
    defaultValues: {
      content: '',
      money: 0,
      time: [0, 0],
      bank: 'VietCombank'
    },

    resolver: yupResolver(schema),
  });

  const updatePendingMethod = useForm<PendingFields>({
    mode: 'onSubmit',
    defaultValues: {
      content: '',
      money: 0,
      time: [0, 0],
      bank: 'VietCombank'
    },

    resolver: yupResolver(schema),
  });

  const { data: groupData, isLoading: isGroupGetting} = useQuery({
    queryKey:['bank-manager-detail-get-group', currentGroup],
    queryFn: () => getGroupBySlug(currentGroup?.slug ?? ''),
    enabled: Boolean(currentGroup?.slug)
  })

  const { data: pendingData, isLoading: isPendingGetting } = useQuery({
    queryKey: ['bank-manager-detail-get-pending', calendarViewDateDebounce, currentGroup],
    queryFn: () => getPendingService(calendarViewDate.getMonth() + 1, calendarViewDate.getFullYear(), currentGroup?.id ?? ''),
    enabled: Boolean(currentGroup?.id)
  })

  const { mutate: createPendingMutate, isLoading: isPendingCreating } = useMutation({
    mutationKey: ['bank-manager-detail-create-pending'],
    mutationFn: createPendingService,
    onSuccess: () => {
      toast.success('Tạo chi tiêu thành công');
      queryClient.invalidateQueries({ queryKey: ['bank-manager-detail-get-pending'] });
      queryClient.invalidateQueries({ queryKey: ['bank-manager-detail-get-group'] });
      setIsOpenCreatePendingModal(false);
      setIsOpenPendingDetailModal(true);
    },
    onError: (err) => {
      console.log(err)
      toast.error('Tạo chi tiêu thất bại')
    }
  })

  const { mutate: updatePendingMutate, isLoading: isPendingUpdating } = useMutation({
    mutationKey: ['bank-manager-detail-update-pending'],
    mutationFn: (params: {pendingId: string; data: UpdatePendingParams}) => updatePendingService(params.pendingId, params.data),
    onSuccess: () => {
      toast.success('Cập nhật chi tiêu thành công');
      setSelectedPendingUpdateModal(undefined);
      setIsOpenPendingDetailModal(true);
      queryClient.invalidateQueries({queryKey: ['bank-manager-detail-get-pending']});
      queryClient.invalidateQueries({queryKey: ['bank-manager-detail-get-group']});
    },
    onError: () => {
      toast.error('Cập nhật chi tiêu thất bại');
    }
  })

  const { mutate: deletePendingMutate, isLoading: isPendingDeleting } = useMutation({
    mutationKey: ['bank-manager-detail-delete-pending'],
    mutationFn: deletePendingService,
    onSuccess: () => {
      toast.success('Xóa chi tiêu thành công');
      queryClient.invalidateQueries({
        queryKey: ['bank-manager-detail-get-pending']
      });
      queryClient.invalidateQueries({queryKey: ['bank-manager-detail-get-group']});

    },
    onError: () => {
      toast.error('Xóa chi tiêu thất bại');
    }
  })

  const convertedNoteList = useMemo<PendingManageNote[]>(() => {
    return pendingData?.map(pending => ({
      id: pending._id ?? '',
      bank: pending.bank ?? '',
      content: pending.content ?? '',
      date: new Date(pending.date ?? ''),
      money: pending.money ?? 0
    })) ?? []
  }, [pendingData])

  const {income, expenses} = useMemo(() => {
    return pendingData?.reduce<{income: number, expenses: number}>(
      (currentValue, value) => {
        const money = value.money ?? 0;
        return {
          income: money > 0 ? currentValue.income + money : currentValue.income,
          expenses: money < 0 ? currentValue.expenses + money : currentValue.expenses
        }
      },
      {income: 0, expenses: 0}
    ) ?? {income: 0, expenses: 0}
  }, [pendingData])

  const convertedPendingDetailList = useMemo(() => {
      return pendingData?.filter(pending => isADate(new Date(pending.date ?? ''), selectedDate)).map(value => ({
        id: value._id ?? '',
        bank: value.bank ?? '',
        content: value.content ?? '',
        date: new Date(value.date ?? ''),
        money: value.money ?? 0
      })) ?? [];
  }, [selectedDate, isOpenPendingDetailModal, pendingData]);



  const handleCreate = (values: PendingFields) => {
    if (!currentGroup) {
      toast.error('Vui lòng chọn một nhóm');
      return;
    }

    const dateTime = new Date(selectedDate);
    dateTime.setHours(values.time[0], values.time[1]);
    createPendingMutate({
      groupId: currentGroup?.id,
      bank: values.bank,
      content: values.content,
      date: dateTime.toISOString(),
      money: values.money
    })
  }

  const handleOpenCreatePendingModal = () => {
    setIsOpenCreatePendingModal(true);
    const now = new Date();
    method.reset();
    method.setValue('time', [now.getHours(), now.getMinutes()])
  }

  const handlePendingUpdateClick = (pendingId: string) => {
    const foundPending = pendingData?.find(value => value._id == pendingId);
    if (!foundPending) return;
    setIsOpenPendingDetailModal(false);
    setSelectedPendingUpdateModal(pendingId);
    const pendingDate = new Date(foundPending.date ?? Date.now());
    updatePendingMethod.setValue('content', foundPending.content ?? '')
    updatePendingMethod.setValue('bank', foundPending.bank ?? '')
    updatePendingMethod.setValue('money', foundPending.money ?? 0)
    updatePendingMethod.setValue('time', [pendingDate.getHours(), pendingDate.getMinutes()]);
  }

  const handleUpdatePending = (values: PendingFields) => {
    const foundPending = pendingData?.find(value => value._id === selectedPendingUpdateModal)
    if(!foundPending || !selectedPendingUpdateModal) return;
    const pendingDate = new Date(foundPending.date ?? Date.now());
    pendingDate.setHours(values.time[0], values.time[1]);
    updatePendingMutate({
      pendingId: selectedPendingUpdateModal,
      data: {
        bank: values.bank,
        content: values.content,
        date: pendingDate.toISOString(),
        money: Number(values.money),
      }
    })
  }

  const handlePendingDeleteClick = (pendingId: string) => {
    deletePendingMutate(pendingId);
  }

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', mb: (theme) => theme.spacing(12) }}>
          <Typography>Tổng tiền: </Typography>
          <Typography sx={{ ml: (theme) => theme.spacing(4), color: '#198754' }}>{numberToMoney(groupData?.baseMoney ?? 0)} VNĐ</Typography>
        </Box>
      </Container>
      <PendingManageCalendar
        viewDate={calendarViewDate}
        selectedDate={selectedDate}
        noteList={convertedNoteList}
        onHeaderClick={() => setIsShowMonthSelect(preState => !preState)}
        isShowMonth={isShowMonthSelect}
        onChange={(date) => { setSelectedDate(date); setIsOpenPendingDetailModal(true) }}
        onChangeViewDate={(date) => setCalendarViewDate(date)}
        onCloseDetailModal={() => setIsOpenPendingDetailModal(false)}
        onAddPendingClick={handleOpenCreatePendingModal}
        isLoading={isPendingGetting}
      />
      <Section >
        <ExpenditureSummary
          date={calendarViewDate}
          expenses={expenses}
          income={income}
        />
      </Section>
      <CustomModal
        isOpen={isOpenCreatePendingModal}
        handleClose={() => { setIsOpenCreatePendingModal(false) }}
        modifiers='addPending'
      >
        <CreatePendingForm isFormLoading={isPendingCreating} title="Tạo chi tiêu" method={method} onSubmit={handleCreate} onCancelClick={() => setIsOpenCreatePendingModal(false)} />
      </CustomModal>
      {/* Update pending modal */}
      <CustomModal
        isOpen={Boolean(selectedPendingUpdateModal)}
        handleClose={() => { setSelectedPendingUpdateModal(undefined) }}
        modifiers='addPending'
      >
        <CreatePendingForm
          isFormLoading={isPendingCreating}
          title="Cập nhật chi tiêu" submitButtonLabel="Cập nhật"
          method={updatePendingMethod} onSubmit={handleUpdatePending}
          onCancelClick={() => {setSelectedPendingUpdateModal(undefined); setIsOpenPendingDetailModal(true)}}
        />
      </CustomModal>
      <CustomModal
        isOpen={isOpenPendingDetailModal}
        handleClose={() => { setIsOpenPendingDetailModal(false) }}
        modifiers='pendingList'
      >
        <PendingDetail
          currDate={selectedDate}
          onAddPendingClick={() => { setIsOpenPendingDetailModal(false); handleOpenCreatePendingModal() }}
          pendingList={convertedPendingDetailList}
          onDeleteClick={handlePendingDeleteClick}
          onUpdateClick={handlePendingUpdateClick}
        />
      </CustomModal>
    </>
  )
}

export default CalendarContainer;