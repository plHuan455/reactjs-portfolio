import axiosInstance from "~services/common/instance";
import { DefaultPayloadTypes } from "~services/type";
import { CreateGroupParams, GroupPayloadTypes, MemberTypes, UpdateGroupParams } from "./type";

export const getGroupsService = async (): Promise<GroupPayloadTypes[]> => {
  const response = await axiosInstance.get('/group');
  return response.data.data;
}

export const getGroupBySlug = async (slug: string): Promise<GroupPayloadTypes | null> => {
  const res = await axiosInstance.get(`/group/${slug}`)
  return res.data.data;
}

export const createGroupService = async (data: CreateGroupParams): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.post('/group', data);
  return response.data;
}

export const updateGroupService = async (data: UpdateGroupParams): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.put(`/group/create/${data.slug}`, data.data);
  return response.data;
}

export const deleteGroupService = async (slug: string): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.delete(`/group/delete-group/${slug}`);
  return response.data;
}

export const getMembersService = async (groupSlug: string): Promise<MemberTypes[]> => {
  const response = await axiosInstance.get(`/group/${groupSlug}/member`)
  return response.data.data;
}

export const addMemberService = async (groupSlug: string, usernames: string[]): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.post(`/group/add-member/${groupSlug}`, {usernames})
  return response.data;
}

export const deleteMemberService = async (groupSlug: string, userId: string): Promise<DefaultPayloadTypes> => {
  const res = await axiosInstance.delete(`/group/${groupSlug}/member/${userId}`);
  return res.data.data;
}