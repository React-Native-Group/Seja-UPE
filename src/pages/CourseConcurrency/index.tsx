import { RouteProp, useRoute } from '@react-navigation/core';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { RoutesParamList } from '../../routes';
import { AssetWidgetClassificationIcon } from '../../assets';
import { SisuGrade, SsaGrade, useEnterScreen, useLeaveScreen } from '../../core/hooks';

import {
  CardConcurrency,
  CardVacancy,
  Chart,
  DividerConcurrency,
  PageLayout,
  Spacer,
  TitleOutline
} from '../../core/components';

type GradeType = 'highest' | 'lowest' | 'shareholderHighest' | 'shareholderLowest';

export interface CourseConcurrencyProps { }

export const CourseConcurrency: FunctionComponent<CourseConcurrencyProps> = () => {

  const [ssaGrade, setSsaGrade] = useState<SsaGrade[]>([]);
  const [sisuGrade, setSisuGrade] = useState<SisuGrade[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const routes = useRoute<RouteProp<RoutesParamList, 'CourseConcurrency'>>();

  function popGrade(grades: SsaGrade[] | SisuGrade[], type: GradeType, places: number = 2): string 
  {
    let lastGrade = (grades.length > 0) ? grades.slice(-1)[0][type] : '0'
    return String(Number(lastGrade).toFixed(places)); 
  }

  useEffect(() => {
    setSsaGrade(routes.params.ssaGrades);
    setSisuGrade(routes.params.sisuGrades);
  }, [routes]);

  useEnterScreen(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });

  useLeaveScreen(() => {
    setIsLoading(true);
  });

  return (
    <PageLayout 
      showHeader
      showSpinner={isLoading}
      canGoBack
    >
      <TitleOutline title="Notas de Corte" icon={AssetWidgetClassificationIcon} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="ssa" title="Informações do SSA" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={popGrade(ssaGrade, 'lowest')} 
        higherNote={popGrade(ssaGrade, 'highest')} />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={popGrade(ssaGrade, 'shareholderLowest')} 
        higherNote={popGrade(ssaGrade, 'shareholderHighest')} 
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Concorrente por vaga" bold={false} />
      <Spacer verticalSpace={16} />

      <CardVacancy value={Math.ceil(Number(ssaGrade.length > 0 ? (ssaGrade.slice(-1)[0].concurrence) : '0'))} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="sisu" title="Informações do Sisu" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={popGrade(sisuGrade, 'lowest', 0)} 
        higherNote={popGrade(sisuGrade, 'highest', 0)}
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={popGrade(sisuGrade, 'shareholderLowest', 0)} 
        higherNote={popGrade(sisuGrade, 'shareholderHighest', 0)} 
      />
      <Spacer verticalSpace={48} />

      <TitleOutline title="Evolução da concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <Chart 
        legend="Evolução da concorrência" 
        labels={sisuGrade.map(({year}) => String(year))} 
        data={sisuGrade.map(({lowest}) => Number(lowest))} 
      />

    </PageLayout>
  );
}
