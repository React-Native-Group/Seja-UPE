import React, { useContext } from 'react';
import { GlobalContext, GlobalProviderValue } from '../providers';

export function useGlobal(): GlobalProviderValue {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within a GlobalProvider");
  return context;
}