import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from '../../utils/localStorage';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8080/api" : "https://budget-planner-hflj.onrender.com/api"
});

axiosInstance.interceptors.request.use(
  ($config: AxiosRequestConfig): AxiosRequestConfig => {
    if ($config.headers) {
      const token = getToken();
      if (token) {
        $config.headers.Authorization = `Bearer ${token}`;
      }
      // if ($config.method === 'get') {
      //   $config.params = { ...$config.params, locale: window.localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || 'vi' };
      // }
      $config.headers['Content-Type'] = 'application/json';
      $config.headers.Accept = 'application/json';
    }
    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(
    error
  ),
);
export default axiosInstance;
