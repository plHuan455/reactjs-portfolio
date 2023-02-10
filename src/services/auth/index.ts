import axiosInstance from "~services/common/instance"
import { DefaultPayloadTypes } from "~services/type";
import { SignInParams, SignInPayloadTypes, SignUpParamsTypes, UserInfoPayloadTypes } from "./type";

export const signInService = async (data: SignInParams): Promise<SignInPayloadTypes> => {
  const response  = await axiosInstance.post('/user/login', data);
  return response.data.data;
}

export const signUpService = async (data: SignUpParamsTypes): Promise<DefaultPayloadTypes> => {
  const response = await axiosInstance.post('/user/register', data);
  return response.data;
}

export const getUserInfoService = async (): Promise<UserInfoPayloadTypes> => {
  const response = await axiosInstance.get('/user');
  return response.data.data;
}