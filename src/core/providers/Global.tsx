import React, { createContext, FunctionComponent, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface GlobalProps {
  children?: React.ReactNode;
}

export interface GlobalValue {
  user?: any;
  session?: any;
  extra?: any;
  storage?: any;
  data?: any;
}

export interface GlobalProviderValue {
  data: GlobalValue,
  setData: (v: GlobalValue) => void
}

export const GlobalContext = createContext<GlobalProviderValue>({
  data: {}, 
  setData: (v: GlobalValue) => {}
});

export const GlobalProvider: FunctionComponent<GlobalProps> = ({ children }: GlobalProps) => {
  const [data, setData] = useState<GlobalValue>({});

  useEffect(() => {
    AsyncStorage.getItem("@session", (error?: Error, result?: string) => {
      if (!!error)
        return;
      try{
        setData(JSON.parse(result ?? '{}'));
      } catch(e){}
    });
  }, []);

  return (
    <GlobalContext.Provider value={{data, setData}}>
      {children}
    </GlobalContext.Provider>
  );
}
