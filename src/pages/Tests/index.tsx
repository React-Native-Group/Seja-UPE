import React, { FunctionComponent } from 'react';
import Fab from 'react-native-fab'
import { AntDesign } from '@expo/vector-icons'; 


import { Accordion, MapView, PageLayout, TitleOutline } from '../../core/components';

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

      <Accordion title="Sobre o Curso" body="Corpo do texto">

      </Accordion>


    </PageLayout>
  );
}