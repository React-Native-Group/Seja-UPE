import React, { Fragment, FunctionComponent } from 'react';
import { AssetWidgetClassificationIcon } from '../../assets';
import { CardConcurrency, CardVacancy, Chart, DividerConcurrency, PageLayout, Spacer, TitleOutline } from '../../core/components';

export interface CourseConcurrencyProps { }

export const CourseConcurrency: FunctionComponent<CourseConcurrencyProps> = () => {
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

      <CardConcurrency lowerNote="95" higherNote="72" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote="67" higherNote="59" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Concorrente por vaga" bold={false} />
      <Spacer verticalSpace={16} />

      <CardVacancy value={12} />
      <Spacer verticalSpace={48} />

      <DividerConcurrency type="sisu" title="Informações do Sisu" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Ampla Concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote="950" higherNote="720" />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Cotista" bold={false} />
      <Spacer verticalSpace={16} />

      <CardConcurrency lowerNote="67" higherNote="59" />
      <Spacer verticalSpace={48} />

      <TitleOutline title="Evolução da concorrência" bold={false} />
      <Spacer verticalSpace={16} />

      <Chart 
        legend="Evolução da concorrência" 
        labels={['2016', '2017', '2018', '2019', '2020']} 
        data={[533, 563, 570, 525, 550]} 
      />

    </PageLayout>
  );
}
