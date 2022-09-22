import axiosInstance from "../common/instance"
import { ExampleParams, ExampleTypes } from "./type";

export const getExampleService = async(params: ExampleParams)
:Promise<ExampleTypes> =>{
  const res = await axiosInstance.get('/example', {params});
  return res.data;
}