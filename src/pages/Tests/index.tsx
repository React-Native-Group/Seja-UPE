import React, { FunctionComponent } from 'react';

import { ButtonLink, CardCourse, CardProfessor, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <ButtonLink iconName="envelope" text="escolaridade.multicampi@upe.br" />
    </PageLayout>
  );
}