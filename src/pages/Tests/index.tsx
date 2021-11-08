import React, { FunctionComponent } from 'react';

import { CardCourse, CardProfessor, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <CardProfessor 
        name="Ariane Rodrigues" 
        photo={{ uri: 'http://www.upe.br/garanhuns/wp-content/uploads/2019/08/Ariane-Nunes-Rodrigues.jpg' }} 
        shortbio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " 
        areas={['Engenharia', 'Computação', 'Matemática', 'Licenciatura', 'Exatas']} 
      />
    </PageLayout>
  );
}