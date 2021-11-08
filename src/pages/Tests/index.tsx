import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { CardBaloon, PageLayout } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <CardBaloon direction="left">
        <Text>Olá mundo! :)</Text>
      </CardBaloon>
    </PageLayout>
  );
}