import axiosInstance from "~services/common/instance";
import { CreateGroupParams } from "./type";

export const createGroupService = async (params: CreateGroupParams) => {
  const response = await axiosInstance.post('/group/create', { params });
  return response;
}