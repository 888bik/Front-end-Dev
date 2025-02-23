import type { AxiosRequestConfig } from "axios";
// interface IInterceptors {
//   requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
//   requestFailureFn?: (err: unknown) => unknown;
//   responseSuccessFn?: (res: unknown) => unknown;
//   responseFailureFn?: (err: unknown) => unknown;
// }
// type.ts
interface IInterceptors {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: unknown) => unknown;
  // 修正响应拦截器属性名（单数形式）
  responseSuccessFn?: (res: unknown) => unknown;
  responseFailureFn?: (err: unknown) => unknown; 
}
export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptors;
}
