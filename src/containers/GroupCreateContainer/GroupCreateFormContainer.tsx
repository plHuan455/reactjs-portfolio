import { useForm } from "react-hook-form";
import GroupCreateForm, { GroupCreateFields } from "../../components/templates/GroupCreateForm";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import {
  useMutation
} from "@tanstack/react-query";
import { renderPageUrl } from "../../navigation";
import { createGroupService } from "~services/group";

export interface GroupCreateFormContainerProps { }

const schema = yup.object({
  name: yup.string().required('Vui lòng nhập tên nhóm!'),
  description: yup.string(),
  avatarImg: yup.string(),
}).required();

const GroupCreateFormContainer: React.FC<GroupCreateFormContainerProps> = () => {
  const {mutate: createGroupMutate} = useMutation({mutationFn: createGroupService});
  const navigate = useNavigate();
  const method = useForm<GroupCreateFields>({
    mode: 'onBlur',
    defaultValues: { name: '', description: '', avatarImg: '' },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value: GroupCreateFields) => {
    createGroupMutate(value);
  }

  return <GroupCreateForm
    method={method}
    onSubmit={handleSubmit}
    onCancel={() => navigate(renderPageUrl('GROUP_MANAGER'))}
  />
}

export default GroupCreateFormContainer;