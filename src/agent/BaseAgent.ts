import IBaseAgent from "./IBaseAgent";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default class BaseAgent<T> implements IBaseAgent<T> {
  constructor(private baseUrl: string) {}

  delete = (id: any, config?: AxiosRequestConfig) =>
    Axios.delete(`${this.baseUrl}/${id}`, config);

  get = (id: any, config?: AxiosRequestConfig) =>
    Axios.get<T>(`${this.baseUrl}/${id}`, config).then(
      (response: AxiosResponse<T>) => response.data
    );
  put = (data: T, config?: AxiosRequestConfig) =>
    Axios.put<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );
  post = (data: T, config?: AxiosRequestConfig) =>
    Axios.post<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );
}
