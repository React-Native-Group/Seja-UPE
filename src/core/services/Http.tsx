import axios from 'axios';
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

export async function get<T>({ url, params, headers }: Request): Promise<T | boolean> {
  const response = await Client.get<T>(url, { headers, params });
  if (!response || !response.data)
    return false;
  return response.data;
}

export async function post<T>({ url, params, body, headers }: Request): Promise<T | boolean> {
  const response = await Client.post<T>(url, body, { headers, params });
  if (!response || !response.data)
    return false;
  return response.data;
}

export async function put<T>({ url, params, body, headers }: Request): Promise<T | boolean> {
  const response = await Client.put<T>(url, body, { headers, params });
  if (!response || !response.data)
    return false;
  return response.data;
}

export async function del<T>({ url, params, headers }: Request): Promise<T | boolean> {
  const response = await Client.delete<T>(url, { headers, params });
  if (!response || !response.data)
    return false;
  return response.data;
}
