import { useState } from "react";
import { useSession } from "./Session";

export type EvaluationType = {
  type: 'course';
  value: 'like' | 'dislike';
} | {
  type: 'survey';
  value: number;
}

export type EvaluationHook = [EvaluationType[], (e: EvaluationType) => void];

export function useEvaluation(): EvaluationHook
{
  const [session, setSession] = useSession();
  const [evaluations, setEvaluations] = useState<EvaluationType[]>([]);

  if (!!session.storage && Array.isArray(session.storage)){
    setEvaluations((session.storage as EvaluationType[]));
  }

  function addEvaluation(evaluation: EvaluationType){
    setSession({...session, storage: [...evaluations, evaluation]});
  }

  return [evaluations, addEvaluation];
}
