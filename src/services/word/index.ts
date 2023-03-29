import axiosInstance from "~services/common/instance"
import { CreateWordParams, UpdateWordParams, WordResponse } from "./type";

export const getWordService = async (): Promise<WordResponse[]> => {
  const res = await axiosInstance.get('/word');
  return res.data.data;
}

export const createWordService = async (params: CreateWordParams) => {
  const res = await axiosInstance.post('/word', params);
  return res.data.data;
}

export const updateWordService = async (wordId: string, params: UpdateWordParams) => {
  const res = await axiosInstance.put(`/word/${wordId}`, params);
  return res.data.data
}

export const deleteWordService = async (wordId: string) => {
  const res = await axiosInstance.delete(`/word/${wordId}`);
  return res.data.data;
}