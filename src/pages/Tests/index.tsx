import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';

import { CampusNavigationProp, RoutesParamList } from '../../routes';
import {
  ButtonLink,
  ModalEvaluation,
  PageLayout,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {
  const navigation = useNavigation<CampusNavigationProp>();

  function navigate(route: keyof RoutesParamList){
    navigation.navigate(route);
  }

  return (
    <PageLayout 
      showFab
      showHeader
      canGoBack
    >
      <TitleOutline title="Layouts de telas prontos" />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Início" 
        iconName="share" 
        onPress={() => navigate('Welcome')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Início > Teste Vocacional" 
        iconName="share" 
        onPress={() => navigate('Survey')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Início > Teste Vocacional > Sugestões de Cursos" 
        iconName="share" 
        onPress={() => navigate('Suggestions')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Início > Teste Vocacional > Resultados de Pesquisa" 
        iconName="share" 
        onPress={() => navigate('SearchResults')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Campus" 
        iconName="share" 
        onPress={() => navigate('Campus')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Campus > Contatos" 
        iconName="share" 
        onPress={() => navigate('CampusContact')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Campus > Cursos" 
        iconName="share" 
        onPress={() => navigate('CampusCourses')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Campus > Events" 
        iconName="share" 
        onPress={() => navigate('CampusEvents')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Curso" 
        iconName="share" 
        onPress={() => navigate('Course')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Curso > Notas de Corte" 
        iconName="share" 
        onPress={() => navigate('CourseConcurrency')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Curso > Projeto Pedagógico" 
        iconName="share" 
        onPress={() => navigate('CoursePlanning')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Curso > Professores" 
        iconName="share" 
        onPress={() => navigate('CourseProfessors')} 
      />
      <Spacer verticalSpace={10} />

      <ButtonLink 
        text="Curso > Professores > Professor" 
        iconName="share" 
        onPress={() => navigate('CourseProfessor')} 
      />
      <Spacer verticalSpace={10} />

    </PageLayout>
  );
}