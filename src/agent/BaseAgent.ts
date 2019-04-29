import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default abstract class BaseAgent {
  constructor(private baseUrl: string) {}

  protected delete = (id: any, config?: AxiosRequestConfig) =>
    Axios.delete(`${this.baseUrl}/${id}`, config);

  protected getMany = <T>(
    query: any,
    config?: AxiosRequestConfig
  ): Promise<T[]> =>
    Axios.get<T[]>(`${this.baseUrl}/${query}`, config).then(
      (response: AxiosResponse<T[]>) => response.data
    );

  protected get = <T>(id: any, config?: AxiosRequestConfig): Promise<T> =>
    Axios.get<T>(`${this.baseUrl}/${id}`, config).then(
      (response: AxiosResponse<T>) => response.data
    );

  protected put = <T>(data: T, config?: AxiosRequestConfig): Promise<T> =>
    Axios.put<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );

  protected post = <T>(data: T, config?: AxiosRequestConfig): Promise<T> =>
    Axios.post<T>(`${this.baseUrl}`, data, config).then(
      (response: AxiosResponse<T>) => response.data
    );
}
