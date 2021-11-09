import React, { FunctionComponent } from 'react';
import { AssetWidgetSampleIcon } from '../../assets';

import { CardSuggestion, PageLayout, TitleOutline } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <TitleOutline title="Teste" />

      <TitleOutline icon={AssetWidgetSampleIcon} title="Teste" />
    </PageLayout>
  );
}