import axiosInstance from "~services/common/instance";
import { DefaultPayloadTypes } from "~services/type";
import { CreatePendingParams, PendingResponse, UpdatePendingParams } from "./type";

export const getPendingService = async (month: number, year: number, groupId: string): Promise<PendingResponse[]> => {
  const res = await axiosInstance.get(`/pending?groupId=${groupId}&month=${month}&year=${year}`)
  return res.data.data;
}

export const createPendingService = async (params: CreatePendingParams): Promise<DefaultPayloadTypes> => {
  const res = await axiosInstance.post(`/pending`, params);
  return res.data.data;
}

export const updatePendingService = async (pendingId: string, params: UpdatePendingParams): Promise<DefaultPayloadTypes> => {
  const res = await axiosInstance.put(`/pending/${pendingId}`, params);
  return res.data.data;
}

export const deletePendingService = async (pendingId: string): Promise<DefaultPayloadTypes> => {
  const res = await axiosInstance.delete(`/pending/${pendingId}`);
  return res.data.data;
}