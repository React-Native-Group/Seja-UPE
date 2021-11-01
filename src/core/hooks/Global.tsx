import { useContext } from 'react';
import { GlobalContext } from '../providers';

export function useGlobal(){
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within a GlobalProvider");
  return context;
}