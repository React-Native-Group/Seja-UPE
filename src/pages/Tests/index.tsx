import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { AssetCapIcon } from '../../assets';

import {
  Avatar,
  ButtonLink,
  PageLayout,
  Spacer,
  TitleOutline
} from '../../core/components';

import { CampusNavigationProp } from '../../routes';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {
  const navigation = useNavigation<CampusNavigationProp>();

  function navigate(){
    navigation.navigate('CampusEvents');
  }

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

      <ButtonLink text="Eventos do Campus" iconName={'share'} onPress={navigate} />

    </PageLayout>
  );
}