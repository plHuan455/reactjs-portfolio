import axiosInstance from "~services/common/instance"
import { SignInParams, SignInPayloadTypes, UserInfoPayloadTypes } from "./type";

export const signInService = async (payload: SignInParams): Promise<SignInPayloadTypes> => {
  const response  = await axiosInstance.post('/user/login', payload);
  return response.data.data;
}

export const getUserInfoService = async (): Promise<UserInfoPayloadTypes> => {
  const response = await axiosInstance.get('/user/info');
  return response.data.data;
}