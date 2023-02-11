import { useMemo, useState } from "react";
import { calendarNoteListDummy } from "../../assets/dataDummy/bankManagerDetailDummy";
import PendingManageCalendar, { PendingManageNote } from "../../components/templates/PendingManageCalendar"
import CustomModal from "~organisms/Modal";
import * as yup from 'yup';
import CreatePendingForm, { PendingFields } from "~organisms/CreatePendingForm";
import {useForm} from 'react-hook-form';
import { useAppSelector } from "../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPendingService, getPendingService } from "~services/pending";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ModalBase from "~organisms/ModalBase";
import useDebounce from "~hooks/useDebounce";
import { BsCheckLg } from "react-icons/bs";
import PendingDetail, { PendingDetailTypes } from "~templates/PendingDetail";
import { isADate } from "../../utils/funcs";

interface CalendarContainerProps {
}

const schema = yup.object({
  content: yup.string().required('Vui lòng nhập nội dung'),
  money: yup.number().default(0).required('Vui lòng nhập số ti'),
  time: yup.mixed().test('time', 'Thời gian không hợp lệ', (time) => {
    const [hours, minutes] = time;
    if(0 <= Number(hours) && Number(hours) < 24 && Number(minutes) < 60 && Number(minutes) >= 0){
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

  const {data: pendingData, isLoading: isPendingGetting} = useQuery({
    queryKey: ['bank-manager-detail-get-pending', calendarViewDateDebounce],
    queryFn: () => getPendingService(calendarViewDate.getMonth() + 1, calendarViewDate.getFullYear(), currentGroup?.id ?? ''),
    enabled: Boolean(currentGroup?.id)
  })

  const {mutate: createPendingMutate, isLoading: isPendingCreating} = useMutation({
    mutationKey: ['bank-manager-detail-create-pending'],
    mutationFn: createPendingService,
    onSuccess: () => {
      toast.success('Tạo chi tiêu thành công');
      queryClient.invalidateQueries({queryKey: ['bank-manager-detail-get-pending']});
    },
    onError: (err) => {
      console.log(err)
      toast.error('Tạo chi tiêu thất bại')
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

  const convertedPendingDetailList = useMemo<PendingDetailTypes[]>(() => {
    if (isOpenPendingDetailModal) {
      return pendingData?.filter(pending => isADate(new Date(pending.date ?? ''), selectedDate)).map(value => ({
        id: value._id ?? '',
        bank: value.bank ?? '',
        content: value.content ?? '',
        date: new Date(value.date ?? ''),
        money: value.money ?? 0
      })) ?? [];
    }

    return [];
  }, [selectedDate, isOpenPendingDetailModal]);

  const handleCreate = (values: PendingFields) => {
    if(!currentGroup) {
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
      money: String(values.money)
    })
  }

  const handleOpenCreatePendingModal = () => {
    setIsOpenCreatePendingModal(true);
    const now = new Date();
    method.setValue('time', [now.getHours(), now.getMinutes()])
  }

  return (
    <>
      <PendingManageCalendar
        viewDate={calendarViewDate}
        selectedDate={selectedDate}
        noteList={convertedNoteList}
        onHeaderClick={()=> setIsShowMonthSelect(preState => !preState)}
        isShowMonth={isShowMonthSelect}
        onChange={(date) => {setSelectedDate(date); setIsOpenPendingDetailModal(true)}}
        onChangeViewDate={(date) => setCalendarViewDate(date)}
        onCloseDetailModal={() => setIsOpenPendingDetailModal(false)}
        onAddPendingClick={handleOpenCreatePendingModal}
      />
      <CustomModal
        isOpen={isOpenCreatePendingModal}
        handleClose={() => {setIsOpenCreatePendingModal(false)}}
        modifiers='addPending'
      >
        <CreatePendingForm isFormLoading={isPendingCreating} title="Tạo chi tiêu" method={method} onSubmit={handleCreate} onCancelClick={() => setIsOpenCreatePendingModal(false)} />
      </CustomModal>
      <CustomModal
        isOpen={isOpenPendingDetailModal}
        handleClose={() => {setIsOpenPendingDetailModal(false)}}
        modifiers='pendingList'
      >
        <PendingDetail
          currDate={selectedDate}
          onAddPendingClick={() => {setIsOpenPendingDetailModal(false); handleOpenCreatePendingModal()}}
          pendingList={convertedPendingDetailList} 
        />
      </CustomModal>
    </>
  )
}

export default CalendarContainer;