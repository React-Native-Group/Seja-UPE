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

  function addEvaluation(evaluation: EvaluationType){
    setGlobal({...global, storage: [...(global.storage ?? [] as EvaluationType[]), evaluation]});
  }

  function hasEvaluation(type: 'survey' | 'course', id: number){
    return (global.storage ?? [] as EvaluationType[]).filter((e: EvaluationType) => (e.type == type) && (e.id == id)).length > 0;
  }

  return [addEvaluation, hasEvaluation];
}
