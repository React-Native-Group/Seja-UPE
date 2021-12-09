import { SurveyChoices, SurveyValue } from "../config/Survey";

export function sumSurveyValues(values1: SurveyValue[], values2: SurveyValue[]): SurveyValue[]
{
  return values1.map((value, i) => {
    let [x, y] = value;
    let [a, _] = values2[i];
    return [a+x, y];
  });
}

export function getSurveyResults(choices: SurveyChoices): SurveyValue[]
{
  let results = choices[0].Values;
  for (let k = 1; k < choices.length; k++) {
    results = sumSurveyValues(choices[k].Values, results);
  }
  return results;
}