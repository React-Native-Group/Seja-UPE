import React, { useContext } from "react";
import { GlobalContext, GlobalValue } from "../providers";

export function useGlobal(): [GlobalValue, (e: GlobalValue) => void] {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobal must be used within a GlobalProvider");
  const {data, setData} = context;
  return [data, setData];
}