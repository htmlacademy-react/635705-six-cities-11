import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import {toast} from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];


const BACKEND_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const targetUrl = error.response.config.url;
        const method = error.response.config.method;
        if (targetUrl === '/login') {toast.warn('Статус пользователя не определен');}
        if (targetUrl === '/hotels') {toast.warn('Список предложений не загружен');}
        if (targetUrl?.includes('/comments') && method === 'get') {toast.warn('Список комментариев не загружен');}
        if (targetUrl?.includes('/comments') && method === 'post') {toast.warn('Комментарий не отправлен');}

        if (!targetUrl?.includes('/comments') && targetUrl !== '/login' && targetUrl !== '/hotels')
        {toast.warn(error.response.data.error);}
      }

      throw error;
    }
  );
  return api;
};
