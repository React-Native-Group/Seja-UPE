import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';

import { AssetWidgetClassificationIcon } from '../../assets';
import { SisuGrade, SsaGrade, useEnterScreen, useLeaveScreen } from '../../core/hooks';
import { RoutesParamList } from '../../routes';

import {
  CardConcurrency,
  CardVacancy,
  Chart,
  DividerConcurrency,
  PageLayout,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface CourseConcurrencyProps { }

export const CourseConcurrency: FunctionComponent<CourseConcurrencyProps> = () => {

  const [ssaGrade, setSsaGrade] = useState<SsaGrade[]>([]);
  const [sisuGrade, setSisuGrade] = useState<SisuGrade[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const routes = useRoute<RouteProp<RoutesParamList, 'CourseConcurrency'>>();

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
        lowerNote={ssaGrade.length > 0 ? ssaGrade.slice(-1)[0].lowest : '0'} 
        higherNote={ssaGrade.length > 0 ? ssaGrade.slice(-1)[0].highest : '0'} />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={ssaGrade.length > 0 ? ssaGrade.slice(-1)[0].shareholderLowest : '0'} 
        higherNote={ssaGrade.length > 0 ? ssaGrade.slice(-1)[0].shareholderHighest : '0'} 
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Concorrente por vaga" bold={false} />
      <Spacer verticalSpace={16} />

      <CardVacancy value={Number(ssaGrade.length > 0 ? ssaGrade.slice(-1)[0].concurrence : '0')} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="sisu" title="Informações do Sisu" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={sisuGrade.length > 0 ? sisuGrade.slice(-1)[0].lowest : '0'} 
        higherNote={sisuGrade.length > 0 ? sisuGrade.slice(-1)[0].highest : '0'}
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency 
        lowerNote={sisuGrade.length > 0 ? sisuGrade.slice(-1)[0].shareholderLowest : '0'} 
        higherNote={sisuGrade.length > 0 ? sisuGrade.slice(-1)[0].shareholderHighest : '0'} 
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
