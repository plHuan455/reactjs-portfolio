import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from '../../utils/localStorage';

// import { getAccessToken } from './storage';

// import { LOCAL_STORAGE } from 'utils/constants';

// const url = process.env.NODE_ENV === 'development' ? process.env.SERVER_URL_DEV : process.env.SERVER_URL_PRODUCT;

const axiosInstance = axios.create({
  baseURL: 'https://pending-manager.herokuapp.com/api' || process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api': 'https://pending-manager.herokuapp.com/api',
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
