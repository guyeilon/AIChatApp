import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTPMethod } from 'api/types';
import apiUtils from 'api/utils';
import { handleErrorResponse } from 'api/errors';
import StorageKey from 'constants/storage';

const createClient = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    apiUtils.setAuthHeaderFromStorage(StorageKey.TOKEN),
  );
  instance.interceptors.response.use(
    (res: AxiosResponse) => res,
    handleErrorResponse,
  );

  return <T>({
    method = HTTPMethod.GET,
    url,
    data,
    ...rest
  }: AxiosRequestConfig): Promise<T> =>
    instance({
      method,
      url,
      data,
      paramsSerializer: { serialize: apiUtils.paramsSerializer },
      ...rest,
    }).then((res: AxiosResponse<T>) => res.data);
};

export const createAuthHeaderSetter =
  (instance: AxiosInstance) => (token?: string) => {
    if (token)
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    else delete instance.defaults.headers.common.Authorization;
    return token;
  };

export default createClient;
