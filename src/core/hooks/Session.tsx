import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalValue } from "../providers";
import { useGlobal } from "./Global";

export type SessionHook = [GlobalValue, (e: GlobalValue) => void, (bearer: string) => void];

export function useSession(): SessionHook 
{
  const [data, setData] = useGlobal();

  function authorize(bearer: string){
    setData({...data, session: bearer});
    AsyncStorage.setItem("@session", JSON.stringify({...data, session: bearer}), (error?: Error) => {});
  }

  useEffect(() => {
    AsyncStorage.getItem("@session", (error?: Error, result?: string) => {
      if (!!error)
        return;
      try{
        setData(JSON.parse(result ?? '{}'));
      } catch(e){}
    });
  }, []);

  return [data, setData, authorize];
}

export function useIsAuthenticated(): boolean
{
  const [data] = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(data.session !== "" && !!data.session);
  }, [data]);

  return isAuthenticated;
}