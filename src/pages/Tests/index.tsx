import React, { FunctionComponent } from 'react';

import { Badge, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <Badge text="Engenharia" width="71px" animated={false} />

    </PageLayout>
  );
}