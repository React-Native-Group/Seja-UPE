import { useEffect, useRef } from "react";
import { GlobalValue } from "../providers";
import { useSession } from "./Session";

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
  const [session, setSession] = useSession();
  const sessionRef = useRef<GlobalValue>({});

  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  function addEvaluation(evaluation: EvaluationType){
    let storage = (sessionRef.current.storage as EvaluationType[] ?? []);
    storage.push(evaluation);
    setSession({...sessionRef.current, storage});
  }

  function hasEvaluation(type: 'survey' | 'course', id: number){
    return (sessionRef.current.storage ?? [] as EvaluationType[]).filter((e: EvaluationType) => 
      (e.type == type) && (e.id == id)).length > 0;
  }

  return [addEvaluation, hasEvaluation];
}
