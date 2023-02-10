import CreatePendingForm, { PendingFields } from "~organisms/CreatePendingForm"
import {  useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useMutation } from "@tanstack/react-query";
import { createPendingService } from "~services/pending";
import { useAppSelector } from "../../store";
import { toast } from "react-toastify";

export interface PendingCreateContainerProps {
  onCancelClick?: () => void;
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

const PendingCreateContainer: React.FC<PendingCreateContainerProps> = ({ onCancelClick }) => {
  const { currentGroup } = useAppSelector(state => state.system);

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

  const {mutate: createPendingMutate, isLoading: isPendingCreating} = useMutation({
    mutationKey: ['pending-create-create-pending'],
    mutationFn: createPendingService,
  })

  const handleCreate = (values: PendingFields) => {
    if(!currentGroup) {
      toast.error('Vui làm chọn một nhóm');
      return;
    }

    createPendingMutate({
      groupId: currentGroup?.id,
      bank: values.bank,
      content: values.content,
      date: String(''),
      money: String(values.money)
    })
  }

  return <CreatePendingForm title="Tạo chi tiêu" method={method} onSubmit={handleCreate} onCancelClick={onCancelClick} />
}

export default PendingCreateContainer
