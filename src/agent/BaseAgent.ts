import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default abstract class BaseAgent<T> {
  constructor(private baseUrl: string) {}

  protected delete = (id: any, config?: AxiosRequestConfig) =>
    Axios.delete(`${this.baseUrl}/${id}`, config);

  protected getMany = (query: any, config?: AxiosRequestConfig) =>
    Axios.get<T[]>(`${this.baseUrl}/${query}`, config).then(
      (response: AxiosResponse<T[]>) => response.data
    );

  protected get = (id: any, config?: AxiosRequestConfig) =>
    Axios.get<T>(`${this.baseUrl}/${id}`, config).then(
      (response: AxiosResponse<T>) => response.data
    );

  protected put = (data: T, config?: AxiosRequestConfig) =>
    Axios.put<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );

  protected post = (data: T, config?: AxiosRequestConfig) =>
    Axios.post<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );
}
