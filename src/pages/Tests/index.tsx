import React, { FunctionComponent, useState } from 'react';

import { createRadioGroup, PageLayout, Radio, RadioType, Spacer, TitleOutline } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  const [state, setState] = useState<RadioType[]>(createRadioGroup(5));

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
      
      <Radio onPress={console.log} reference={state[0]} group={state} onHandle={setState} />
      <Radio onPress={console.log} reference={state[1]} group={state} onHandle={setState} />
      <Radio onPress={console.log} reference={state[2]} group={state} onHandle={setState} />
      <Radio onPress={console.log} reference={state[3]} group={state} onHandle={setState} />
      <Radio onPress={console.log} reference={state[4]} group={state} onHandle={setState} />

    </PageLayout>
  );
}