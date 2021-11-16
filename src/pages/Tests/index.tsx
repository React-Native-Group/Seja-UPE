import React, { FunctionComponent, useState } from 'react';

import {
  ButtonLink,
  createRadioGroup,
  PageLayout,
  Radio,
  RadioType,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      showFab
      showHeader
      showTabs 
      canScroll
      canGoBack
      onTabClick={console.log}
    >
      <TitleOutline title="Teste de sanfona" />
      <Spacer verticalSpace={10} />

      <ButtonLink text="hdfhdf" iconName={'share'} />

    </PageLayout>
  );
}