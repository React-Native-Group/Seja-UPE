import { useEffect, useRef } from "react";
import { GlobalValue } from "../providers";
import { useGlobal } from "./Global";

export type EvaluationType = {
  type: 'course';
  id: number;
} | {
  type: 'survey';
  id: number;
}

export type EvaluationHook = [
  (e: EvaluationType) => void, 
  (t: 'survey' | 'course', id: number) => boolean
];

export function useEvaluation(): EvaluationHook
{
  const [global, setGlobal] = useGlobal();
  const globalRef = useRef<GlobalValue>({});

  useEffect(() => {
    globalRef.current = global;
  }, [global]);

  function addEvaluation(evaluation: EvaluationType){
    setGlobal({
      ...globalRef.current, 
      storage: [...(globalRef.current.storage ?? [] as EvaluationType[]), evaluation]
    });
  }

  function hasEvaluation(type: 'survey' | 'course', id: number){
    return (globalRef.current.storage ?? [] as EvaluationType[]).filter((e: EvaluationType) => 
      (e.type == type) && (e.id == id)).length > 0;
  }

  return [addEvaluation, hasEvaluation];
}
