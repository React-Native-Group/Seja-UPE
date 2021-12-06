import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalValue } from "../providers";
import { useGlobal } from "./Global";

export type SessionHook = [GlobalValue, (e: GlobalValue) => void, (bearer: string) => void, () => void];

export function useSession(): SessionHook 
{
  const [data, setData] = useGlobal();

  function authorize(bearer: string){
    setData({...data, session: bearer});
    AsyncStorage.setItem("@session", JSON.stringify({...data, session: bearer}), (_?: Error) => {});
  }

  function deauthorize(){
    setData({});
    AsyncStorage.removeItem("@session", () => {});
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

  return [data, setData, authorize, deauthorize];
}

export function useIsSessionActive(): boolean
{
  const [data] = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(data.session !== "" && !!data.session);
  }, [data]);

  return isAuthenticated;
}