import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';

import { CampusNavigationProp } from '../../routes';
import {
  ButtonLink,
  PageLayout,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {
  const navigation = useNavigation<CampusNavigationProp>();

  function navigate(){
    navigation.navigate('CourseProfessor');
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

      <ButtonLink 
        text="Cursos do Campus" 
        iconName={'share'} 
        onPress={navigate} 
      />

    </PageLayout>
  );
}