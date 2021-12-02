import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/core';

import { RobotContainer } from './styles';

import { AssetRobotKindIcon } from '../../assets';
import { CourseNavigationProp } from '../../routes';

import {
  Avatar,
  ButtonCourse,
  CardBaloon,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface SearchResultsProps {

}

export const SearchResults: FunctionComponent<SearchResultsProps> = () => {
  const navigation = useNavigation<CourseNavigationProp>();

  function onCourseClick(courseData: any){
    navigation.navigate('Course');
  }

  return (
    <PageLayout
      showHeader
      canGoBack
    >
      <TitleOutline title="Cursos encontrados" />
      <Spacer verticalSpace={32} />

      <RobotContainer>
        <Avatar source={AssetRobotKindIcon} diameter={96} padding={8} />

        <CardBaloon direction="left">
          <Paragraph
            paddingLeft="8px"
            paddingRight="8px"
            paddingTop="8px"
            paddingBottom="8px"
            justify
          >
            Encontrei 7 cursos com base nas informações que você me passou.
          </Paragraph>
        </CardBaloon>
      </RobotContainer>

      <Spacer verticalSpace={32} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Medicina" />
      <Spacer verticalSpace={18} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Engenharia de Software" />
      <Spacer verticalSpace={18} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Psicologia" />
      <Spacer verticalSpace={18} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Letras" />
      <Spacer verticalSpace={18} />

    </PageLayout>
  );
}
