import { useForm } from "react-hook-form";
import GroupCreateForm, { GroupCreateFields } from "../../components/templates/GroupCreateForm";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import {
  useMutation, useQueryClient
} from "@tanstack/react-query";
import { renderPageUrl } from "../../navigation";
import { createGroupService } from "~services/group";
import { toast } from "react-toastify";

export interface GroupCreateFormContainerProps { }

export const groupCreateSchema = yup.object({
  name: yup.string().required('Vui lòng nhập tên nhóm!'),
  description: yup.string(),
  avatarImg: yup.string(),
}).required();

const GroupCreateFormContainer: React.FC<GroupCreateFormContainerProps> = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const method = useForm<GroupCreateFields>({
    mode: 'onBlur',
    defaultValues: { name: '', description: '', avatarImg: '' },
    resolver: yupResolver(groupCreateSchema),
  });
  const {mutate: createGroupMutate, isLoading} = useMutation({
    mutationKey: ['create-group'],
    mutationFn: createGroupService,
    onError: () => {
      toast.error('Tạo nhóm không thành công');
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['get-groups']);
      toast.success('Tạo nhóm thành công');
      method.reset();
    }
  });

  const handleSubmit = async (value: GroupCreateFields) => {
    createGroupMutate(value);
  }

  return <GroupCreateForm
    method={method}
    isFormLoading={isLoading}
    onSubmit={handleSubmit}
    onCancel={() => navigate(renderPageUrl('GROUP_MANAGER'))}
  />
}

export default GroupCreateFormContainer;