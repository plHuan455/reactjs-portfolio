import CreatePendingForm, { PendingFields } from "~organisms/CreatePendingForm"
import {  useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

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
  return <CreatePendingForm title="Tạo chi tiêu" method={method} onSubmit={() => {}} onCancelClick={onCancelClick} />
}

export default PendingCreateContainer
