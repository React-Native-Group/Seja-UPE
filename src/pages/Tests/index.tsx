import React, { FunctionComponent } from 'react';

import { ButtonWidget, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <ButtonWidget 
        legend="Sobre o Campus" 
      />
    </PageLayout>
  );
}