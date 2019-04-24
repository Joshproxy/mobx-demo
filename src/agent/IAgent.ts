import { AxiosRequestConfig } from "axios";

export default interface IAgent<T> {
  delete: (id: any, config?: AxiosRequestConfig) => Promise<any>;
  get: (data: any, config?: AxiosRequestConfig) => Promise<T>;
  put: (data: T, config?: AxiosRequestConfig) => Promise<T>;
  post: (data: T, config?: AxiosRequestConfig) => Promise<T>;
}
