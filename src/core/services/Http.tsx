import axios, { AxiosResponse } from 'axios';
import { WebserviceUrl, AppVersion } from '../config';

export const Client = axios.create({
  baseURL: WebserviceUrl,
  headers: { 'X-App-Version': AppVersion }
});

export type Request = {
  url: string,
  params?: any,
  body?: any,
  headers?: any
} 

export async function get<T>({ url, params, headers }: Request): Promise<[boolean, AxiosResponse<T>]> {
  return new Promise((resolve, _) => {
    Client.get<T>(url, { headers, params })
      .then(res => resolve([true, res]))
      .catch(error => resolve([false, error.response]));
  });
}

export async function post<T>({ url, params, body, headers }: Request): Promise<[boolean, AxiosResponse<T>]> {
  return new Promise((resolve, _) => {
    Client.post<T>(url, body, { headers, params })
      .then(res => resolve([true, res]))
      .catch(error => resolve([false, error.response]));
  });
}

export async function put<T>({ url, params, body, headers }: Request): Promise<[boolean, AxiosResponse<T>]> {
  return new Promise((resolve, _) => {
    Client.put<T>(url, body, { headers, params })
      .then(res => resolve([true, res]))
      .catch(error => resolve([false, error.response]));
  });
}

export async function del<T>({ url, params, headers }: Request): Promise<[boolean, AxiosResponse<T>]> {
  return new Promise((resolve, _) => {
    Client.delete<T>(url, { headers, params })
      .then(res => resolve([true, res]))
      .catch(error => resolve([false, error.response]));
  });
}
