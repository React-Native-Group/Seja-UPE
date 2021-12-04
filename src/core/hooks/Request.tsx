import { useEffect, useRef, useState } from "react";
import { del, get, post, put, Request } from "../services";
import { useGlobal } from "./Global";

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

function isRequestCached<T>(request: Request, cache: WebClientCacheEntry<T>[]): false | WebClientCacheEntry<T> {
  let [cacheEntry] = cache.filter(v => v.key == request.url);
  return cacheEntry !== undefined ? cacheEntry : false;
}

export function useRequest<T>(event: WebClientCallback<T>, cacheable: boolean, hookOptions?: Request)
{
  const [response, setResponse] = useState<WebClientResponse<T> | undefined>();
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const cache = useRef<WebClientCacheEntry<T>[]>([]);

  async function doRequest(method: WebClientMethods, options?: Request)
  {
    let request = hookOptions ?? options ?? { url: '' };
    let cached = isRequestCached(request, cache.current);

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

      if (cacheable && !isRequestCached(request, cache.current)){
        cache.current.push({
          key: request.url,
          method: 'GET',
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

export function useAuthorizedRequest<T>(event: WebClientCallback<T>, cacheable: boolean, hookOptions?: Request)
{
  const [{ session }] = useGlobal();
  const Authorization = { Authorization: !!session ? String(session) : '' }

  function doRequest(method: WebClientMethods, options?: Request){
    if (!!options)
      return request(method, {...options, headers: {...options.headers, ...Authorization}});
  }

  const { request, ...rest } = !!hookOptions ? 
    useRequest<T>(event, cacheable, {...hookOptions, headers: {...hookOptions.headers, ...Authorization}}) : 
    useRequest<T>(event, cacheable);

  return { request: doRequest, ...rest };
}