import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

// import { getAccessToken } from './storage';

// import { LOCAL_STORAGE } from 'utils/constants';

// const url = process.env.NODE_ENV === 'development' ? process.env.SERVER_URL_DEV : process.env.SERVER_URL_PRODUCT;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

axiosInstance.interceptors.request.use(
  ($config: AxiosRequestConfig): AxiosRequestConfig => {
    // if ($config.headers) {
    //   const token = getAccessToken();
    //   if (token) {
    //     $config.headers.Authorization = `Bearer ${token}`;
    //   }
    //   if ($config.method === 'get') {
    //     $config.params = { ...$config.params, locale: window.localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || 'vi' };
    //   }
    //   $config.headers['Content-Type'] = 'application/json';
    //   $config.headers.Accept = 'application/json';
    // }
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
