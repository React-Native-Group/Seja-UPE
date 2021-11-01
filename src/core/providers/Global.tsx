import React, { createContext, FunctionComponent, useState } from "react";

export interface GlobalProps {
  children?: React.ReactNode
}

export interface GlobalValue {
  user?: any,
  session?: any,
  extra?: any,
  storage?: any,
  data?: any
}

export interface GlobalProviderValue {
  data?: GlobalValue,
  setData?: (v: GlobalValue) => void
}

export const GlobalContext = createContext<GlobalProviderValue>({});

export const GlobalProvider: FunctionComponent<GlobalProps> = ({ children }: GlobalProps) => {
  const [data, setData] = useState<GlobalValue>({});

  return (
    <GlobalContext.Provider value={{data, setData}}>
      {children}
    </GlobalContext.Provider>
  );
}
