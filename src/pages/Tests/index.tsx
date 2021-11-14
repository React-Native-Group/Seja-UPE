import React, { FunctionComponent } from 'react';
import { Accordion, MultiSlider, PageLayout, Spacer, TitleOutline, ToggleGroup } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {
  return (
    <PageLayout 
      showFab
      showHeader
      showTabs 
      canScroll
      canGoBack
      onTabClick={console.log}
    >
      <TitleOutline title="Teste de sanfona" />
      <Spacer verticalSpace={10} />

      <Accordion title="Sobre o Curso" body="Corpo do texto" />
      <Spacer verticalSpace={10} />

      <ToggleGroup onChange={console.log} />

    </PageLayout>
  );
}