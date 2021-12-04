import { useEffect, useRef, useState } from "react";
import { del, get, post, put, Request } from "../services";
import { useSession, useIsSessionActive } from "./Session";

export type WebClientMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type WebClientCacheEntry<T> = {
  key: string;
  method: WebClientMethods;
  success: boolean;
  response: WebClientResponse<T>;
}

export type WebClientResponse<T> = {
  data: T;
  status: number;
}

export type WebClientCallback<T> = (success: boolean, response: WebClientResponse<T>) => void;

function isRequestCached<T>(request: Request, method: WebClientMethods, cache: WebClientCacheEntry<T>[]): false | WebClientCacheEntry<T> 
{
  let [cacheEntry] = cache.filter(v => v.key == request.url && v.method == method);
  return cacheEntry !== undefined ? cacheEntry : false;
}

export function useRequest<T>(event: WebClientCallback<T>, cacheable: boolean)
{
  const [response, setResponse] = useState<WebClientResponse<T> | undefined>();
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const cache = useRef<WebClientCacheEntry<T>[]>([]);

  async function doRequest(method: WebClientMethods, options: Request)
  {
    let request = options;
    let cached = isRequestCached(request, method, cache.current);

    if (!cached){
      setResponse(undefined);

      const caller = {
        'GET': get,
        'POST': post,
        'PUT': put,
        'DELETE': del
      }[method];

      const [isSuccess, res] = await caller<T>(request);

      setSuccess(isSuccess);
      setResponse({ data: res.data, status: res.status });

      if (cacheable && !isRequestCached(request, method, cache.current)){
        cache.current.push({
          key: request.url,
          method: method,
          success: isSuccess,
          response: { data: res.data, status: res.status }
        });
      }
      return;
    }

    setResponse(cached.response);
  }

  useEffect(() => {
    if (!!response && (typeof success != "undefined"))
      event(success, response);
  }, [response, success]);

  return { response, success, request: doRequest };
}

export function useAuthorizedRequest<T>(event: WebClientCallback<T>, cacheable: boolean)
{
  const [data] = useSession();
  const isAuthenticated = useIsSessionActive();
  const [canRequest, setCanRequest] = useState(false);
  const [requestOptions, setRequestOptions] = useState<[WebClientMethods, Request] | undefined>(undefined);

  useEffect(() => {

    if (canRequest && isAuthenticated && !!requestOptions){
      const [method, options] = requestOptions;
      const Authorization = { Authorization: 'Bearer ' + data.session ?? '' };
      if (!!options)
        request(method, { ...options, headers: { ...options.headers, ...Authorization } });
      setCanRequest(false);
      setRequestOptions(undefined);
    }

  }, [data, canRequest, requestOptions, isAuthenticated]);

  function doRequest(method: WebClientMethods, options: Request){
    setRequestOptions([method, options]);
    setCanRequest(true);
  }

  const { request, ...rest } = useRequest<T>(event, cacheable);

  return { request: doRequest, ...rest };
}