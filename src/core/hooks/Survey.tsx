import { useEffect, useState } from "react";
import { SurveyValue } from "../config";
import { useSession } from "./Session";

export type SurveyResultsHook = [SurveyValue[], (v: SurveyValue[]) => void];

export function useSurveyResults(): SurveyResultsHook
{
  const [session, setSession] = useSession();
  const [results, setResults] = useState<SurveyValue[]>([]);

  function setSurveyResults(values: SurveyValue[]){
    setSession({ ...session, survey: values });
  }

  useEffect(() => {
    if (!!session.survey){
      let surveyResults = (session.survey as SurveyValue[]);
      //Converte os valores em percentuais
      setResults(surveyResults.map(([note, id]: SurveyValue) => [note / 15, id]));
    }
  }, [session]);

  return [results, setSurveyResults];
}
