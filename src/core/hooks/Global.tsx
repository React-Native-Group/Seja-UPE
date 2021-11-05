import React, { useContext } from 'react';
import { GlobalContext, GlobalProviderValue } from '../providers';

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within a GlobalProvider");
  const {data, setData} = context;
  return [data, setData];
}