import { useEffect, useState } from "react";
import { useSession } from "./Session";

export type EvaluationType = {
  type: 'course';
  id: number;
  value: 'like' | 'dislike';
} | {
  type: 'survey';
  id: number;
  value: number;
}

export type EvaluationHook = [
  EvaluationType[], 
  (e: EvaluationType) => void, 
  (t: 'survey' | 'course', id: number) => void
];

export function useEvaluation(): EvaluationHook
{
  const [session, setSession] = useSession();
  const [evaluations, setEvaluations] = useState<EvaluationType[]>([]);

  useEffect(() => {
    if (!!session.storage && Array.isArray(session.storage)){
      setEvaluations((session.storage as EvaluationType[]));
    }
  }, [session]);

  function addEvaluation(evaluation: EvaluationType){
    setSession({...session, storage: [...evaluations, evaluation]});
  }

  function hasEvaluation(type: 'survey' | 'course', id: number){
    return evaluations.filter((e: EvaluationType) => (e.type == type) && (e.id == id));
  }

  return [evaluations, addEvaluation, hasEvaluation];
}
