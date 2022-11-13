import axiosInstance from "~services/common/instance"
import { SignInParams, SignInPayloadTypes } from "./type";

export const SignInService = async (payload: SignInParams): Promise<SignInPayloadTypes> => {
  const response  = await axiosInstance.post('/user/login', payload);
  return response.data;
}