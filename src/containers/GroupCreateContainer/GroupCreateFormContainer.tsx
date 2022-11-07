import { useForm } from "react-hook-form";
import GroupCreateForm, { GroupCreateFields } from "../../components/templates/GroupCreateForm";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

export interface GroupCreateFormContainerProps {}

const schema = yup.object({
  name: yup.string().required('Vui lòng nhập tên nhóm!'),
  description: yup.string(),
  avatarImg: yup.string(),
}).required();

const GroupCreateFormContainer: React.FC<GroupCreateFormContainerProps> = () => {
  const navigate = useNavigate();
  const method = useForm<GroupCreateFields>({
    mode: 'onBlur', 
    defaultValues: { name: '', description: '', avatarImg: ''},
    resolver: yupResolver(schema),
  });

  return <GroupCreateForm 
    method={method} 
    onSubmit={(value) => console.log(value)}
    onCancel={() => navigate(-1)}
  />
}

export default GroupCreateFormContainer;