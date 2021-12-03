import { DependencyList, EffectCallback, useEffect } from "react";
import { useIsFocused } from "@react-navigation/core";

export function useEnterScreen(effect: EffectCallback, ...deps: DependencyList){
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused)
      return effect();
  }, [isFocused, ...deps]);
}

export function useLeaveScreen(effect: EffectCallback, ...deps: DependencyList){
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused)
      return effect();
  }, [isFocused, ...deps]);
}