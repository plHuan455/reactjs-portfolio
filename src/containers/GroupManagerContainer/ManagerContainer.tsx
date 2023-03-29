import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGroupService, deleteGroupService, getGroupsService, updateGroupService } from "~services/group";
import GroupManager, { GroupTypes } from "~templates/GroupManager";
import { renderPageUrl } from "../../navigation";
import { useForm } from "react-hook-form";
import GroupCreateForm, { GroupCreateFields } from "~templates/GroupCreateForm";
import { groupCreateSchema } from "~containers/GroupCreateContainer/GroupCreateFormContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store";
import { setCurrentGroup } from "../../store/system";
import CustomModal from "~organisms/Modal";

interface ManagerContainerProps { }

const ManagerContainer: React.FC<ManagerContainerProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedUpdateGroupSlug, setSelectedUpdateGroupSlug] = useState<string>();
  const [isShowUpdateForm, setIsShowUpdateForm] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const method = useForm<GroupCreateFields>({
    mode: 'onSubmit',
    defaultValues: { name: '', description: '', avatarImg: '' },
    resolver: yupResolver(groupCreateSchema),
  })

  const {data: groupsData, isLoading: isGroupLoading} = useQuery({
    queryKey: ['group-manager-get-groups'],  
    queryFn: () => getGroupsService(), 
    refetchOnMount: true,
  })
  
  const {mutate: updateGroupMutate, isLoading: updateGroupLoading} = useMutation({
    mutationKey: ['group-manager-update-group'],
    mutationFn: updateGroupService,
    onSuccess: () => {
      queryClient.invalidateQueries(['group-manager-get-groups']);
      queryClient.invalidateQueries(['main-layout-get-groups']);
      toast.success('Cập nhật thành công');
    },
    onError: () => {
     toast.error('Cập nhật không thành công');
    }
  })

  const convertGroup = useMemo<GroupTypes[] | undefined>(() => {
    return groupsData?.map(group => ({
      id: group._id ?? '',
      avatarSrc: group.avatarImg ?? '',
      description: group.description ?? '',
      memberList: group.members?.map(value => {
        const name = value.fullname.split(" ");
        return {username: name[name.length - 1]}
      }) || [],
      name: group.name ?? '',
      slug: group.slug ?? '',
    }))
  }, [groupsData])

  const {mutate: groupDeleteMutate} = useMutation({
    mutationKey: ['group-delete'],
    mutationFn: deleteGroupService,
    onSuccess: () => {
      queryClient.invalidateQueries(['group-manager-get-groups']);
      queryClient.invalidateQueries(['main-layout-get-groups']);
      toast.success('Xóa nhóm thành công')
    }
  });

  useEffect(() => {
    if(!selectedUpdateGroupSlug || !groupsData) return;
    const updateGroup = groupsData.find(group => group.slug === selectedUpdateGroupSlug);
    if(updateGroup){
      method.setValue('name', updateGroup.name ?? '');
      method.setValue('description', updateGroup.description ?? '');
      method.setValue('avatarImg', updateGroup.avatarImg ?? '');
      method.setValue('baseMoney', updateGroup.baseMoney ?? 0);
    }
  }, [selectedUpdateGroupSlug])

  const handleGroupUpdate = (values: GroupCreateFields) => {
    if(selectedUpdateGroupSlug)
      updateGroupMutate({data: values, slug: selectedUpdateGroupSlug})  
  }

  const handleSelectGroup = (group: GroupTypes) => {
    dispatch(setCurrentGroup({id: group.id, name: group.name, description: group.description, slug: group.slug}))
  }

  return (
    <>
      <GroupManager
        groupList={convertGroup ?? []}
        searchValue={searchValue}
        onChangeSearchValue={(value) => setSearchValue(value)}
        onAddGroupClick={() => navigate(renderPageUrl('GROUP_CREATE'))}
        onGroupCardClick={(slug) => {
          if (slug) navigate(renderPageUrl('GROUP_DETAIL', slug));
        }}
        onGroupSelect={handleSelectGroup}
        onGroupUpdate={(slug) => {setSelectedUpdateGroupSlug(slug); setIsShowUpdateForm(true)}}
        onGroupDelete={(slug) => groupDeleteMutate(slug)}
      />

      
    <CustomModal
      isOpen={isShowUpdateForm}
      modifiers='addPending'
      handleClose={() => setIsShowUpdateForm(false)}
    >
      <div className="t-groupManager_modal">
        {/* <FormProvider {...updateMethod}>

        </FormProvider> */}
        <GroupCreateForm
          method={method}
          onSubmit={handleGroupUpdate}
          title="Cập nhật nhóm"
          buttonText="Cập nhật"
          isFormLoading={isGroupLoading}
          onCancel={() => setIsShowUpdateForm(false)}
        />
      </div>
    </CustomModal>
    </>
  )
}

export default ManagerContainer;