import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/core';

import { AssetWidgetClassificationIcon } from '../../assets';
import { SisuGrade, SsaGrade } from '../../core/hooks';
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

  const routes = useRoute<RouteProp<RoutesParamList, 'CourseConcurrency'>>();

  useEffect(() => {
    setSsaGrade(routes.params.ssaGrades);
    setSisuGrade(routes.params.sisuGrades);
  }, [routes])

  return (
    <PageLayout 
      showHeader
      canGoBack
    >
      <TitleOutline title="Notas de Corte" icon={AssetWidgetClassificationIcon} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="ssa" title="Informações do SSA" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote={ssaGrade.slice(-1)[0].lowest} higherNote={ssaGrade.slice(-1)[0].highest} />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote={ssaGrade.slice(-1)[0].shareholderLowest} higherNote={ssaGrade.slice(-1)[0].shareholderHighest} />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Concorrente por vaga" bold={false} />
      <Spacer verticalSpace={16} />

      <CardVacancy value={Number(ssaGrade.slice(-1)[0].concurrence)} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="sisu" title="Informações do Sisu" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote={sisuGrade.slice(-1)[0].lowest} higherNote={sisuGrade.slice(-1)[0].highest}/>
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote={sisuGrade.slice(-1)[0].shareholderLowest} higherNote={sisuGrade.slice(-1)[0].shareholderHighest} />
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
