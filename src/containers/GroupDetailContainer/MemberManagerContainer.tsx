import { Box } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDeferredValue, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { groupMemberDummy } from "~assets/dataDummy/groupDummy";
import { AutoCompleteOptionTypes } from "~molecules/AutoCompleteBase";
import Container from "~organisms/Container";
import ModalBase from "~organisms/ModalBase";
import { addMemberService, deleteMemberService, getGroupBySlug, getMembersService } from "~services/group";
import AddGroupMemberForm, { AddMemberFormFields } from "~templates/AddGroupMemberForm";
import MemberManager, { MemberMenuControlType, MemberTypes } from "~templates/MemberManager";

interface MemberManagerContainerProps { }

const MemberManagerContainer: React.FC<MemberManagerContainerProps> = () => {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState<string>("");
  const [tableRows, setTableRows] = useState<number>(8);
  const { slug = '' } = useParams();
  const [isOpenAddMemberModal, setIsOpenAddMemberModal] = useState<boolean>(false);

  const { data: groupData } = useQuery({
    queryKey: ['member-manager-get-group', slug],
    queryFn: () => getGroupBySlug(slug ?? ''),
    enabled: Boolean(slug)
  })

  const { data: membersData, isLoading: isMemberGetting } = useQuery({
    queryKey: ['member-manager-get-members', slug],
    queryFn: () => getMembersService(slug ?? ''),
    enabled: Boolean(slug)
  })

  const method = useForm<AddMemberFormFields>({
    defaultValues: {
      usernames: []
    }
  })

  const {mutate: addMemberMutate, isLoading: isMemberAdding} = useMutation({
    mutationKey: ['member-manager-add-member'],
    mutationFn: (usernames: string[]) => addMemberService(slug ?? '', usernames),
    onSuccess: () => {
      toast.success('Thêm thành viên thành công')
      queryClient.invalidateQueries({queryKey: ['member-manager-get-members']})
      setIsOpenAddMemberModal(false);
    }
  })

  const { mutate: deleteMemberMutate, isLoading: isMemberDeleting} = useMutation({
    mutationKey: ['member-manager-delete-member'],
    mutationFn: (userId: string) => deleteMemberService(slug, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['member-manager-get-members']});
      toast.success('Xóa thành viên thành công');
    },
    onError: (res) => {
      console.log(res)
      toast.error('Không thể xóa thành viên');
    }
  })

  const convertedMembers = useMemo<MemberTypes[]>(() => {
    return membersData?.map(value => ({
      fullName: value.fullname ?? '',
      joined: new Date(value.createdAt ?? ''),
      email: value.email ?? '',
      id: value.userId ?? '',
      permissions: value.isAdmin ? 'Admin' : 'member',
    })) ?? []
  }, [membersData])

  const handleMemberControlClick = (value: MemberTypes, type: MemberMenuControlType) => {
    if(type === 'delete') {
      deleteMemberMutate(value.id)
    }
  }

  const handleSubmit = (values: AddMemberFormFields) => {
    addMemberMutate(values.usernames.map(value => value.label))
  }

  return (
    <Container>
      <MemberManager
        title={groupData?.name ?? ''}
        memberList={convertedMembers}
        baseMoney={groupData?.baseMoney}
        searchValue={searchValue}
        searchPlaceholder='Tìm thành viên ...'
        tableRowShow={tableRows}
        disabledMemberHash={{ '1': true, '3': true }}
        onTableRowShowChange={(value) => setTableRows(value)}
        onChangeSearchValue={(value) => setSearchValue(value)}
        onAddMemberBtnClick={() => setIsOpenAddMemberModal(true)}
        onMemberMenuControlItemClick={handleMemberControlClick}
      />
      <ModalBase isOpen={isOpenAddMemberModal} onClose={() => setIsOpenAddMemberModal(false)}>
        <Box sx={{backgroundColor: 'white', width: '80vw', pt: (theme) => theme.spacing(28), pb: (theme) => theme.spacing(16), px: (theme) => theme.spacing(16)}}>
          <AddGroupMemberForm method={method} onSubmit={handleSubmit} isFormLoading={isMemberAdding}/>
        </Box>
      </ModalBase>
    </Container>
  )
}

export default MemberManagerContainer;