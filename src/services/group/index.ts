import axiosInstance from "~services/common/instance";
import { DefaultPayloadTypes } from "~services/type";
import { CreateGroupParams, GroupPayloadTypes, UpdateGroupParams } from "./type";

export const getGroupsService = async (): Promise<GroupPayloadTypes[]> => {
  const response = await axiosInstance.get('/group/get-groups');
  return response.data.data;
}

export const createGroupService = async (data: CreateGroupParams): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.post('/group/create', data);
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