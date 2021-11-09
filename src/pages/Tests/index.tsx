import React, { FunctionComponent } from 'react';

import { CardSuggestion, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <CardSuggestion 
        title="Engenharia de Software"
        onPress={() => alert('Teste')}
        progress="100"
      />
    </PageLayout>
  );
}