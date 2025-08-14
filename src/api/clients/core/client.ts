import axios from 'axios';
import environment from 'constants/config';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import createClient, { createAuthHeaderSetter } from 'api/client';

const config: AxiosRequestConfig = {
  baseURL: environment.coreBaseURL,
};

const instance: AxiosInstance = axios.create(config);

const coreClient = createClient(instance);

export const setHeaderToken = createAuthHeaderSetter(instance);

export default coreClient;
