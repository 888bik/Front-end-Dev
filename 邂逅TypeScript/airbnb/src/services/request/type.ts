import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
export interface IInterceptors {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestFailureFn?: (err: unknown) => unknown;
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse;
  responseFailureFn?: (err: unknown) => unknown;
}
export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptors;
}
