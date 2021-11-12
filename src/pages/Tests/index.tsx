import React, { FunctionComponent } from 'react';


import { Accordion, PageLayout, Spacer, TitleOutline } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      showFab={true}
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <TitleOutline title="Teste de sanfona" />

      <Spacer verticalSpace={10} />

      <Accordion title="Sobre o Curso" body="Corpo do texto" />
      
    </PageLayout>
  );
}