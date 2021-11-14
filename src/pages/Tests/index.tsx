import React, { FunctionComponent } from 'react';


import { Accordion, ButtonSocial, ButtonWidget, CardBaloonBottom, PageLayout, Spacer, Title, TitleOutline } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      showFab={true}
      showHeader={true} 
      canScroll={true} 
      canGoBack={true}
    >
      <TitleOutline title="Teste de sanfona" />

      <Spacer verticalSpace={10} />

      <Accordion title="Sobre o Curso" body="Corpo do texto" />
      
      <CardBaloonBottom>
        
      </CardBaloonBottom>

      <ButtonWidget legend="Sobre o curso" onPress={() => alert('dgfghdf')}/>
    </PageLayout>
  );
}