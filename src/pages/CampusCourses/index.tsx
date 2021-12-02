import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';

import {
  AssetWidgetCoursesIcon,
  AssetRobotNormalIcon
} from '../../assets';

import {
  Avatar,
  ButtonCourse,
  CardBaloon,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from '../../core/components';

import { CourseNavigationProp } from '../../routes';
import { RobotContainer } from './styles';

export interface CampusCoursesProps { }

export const CampusCourses: FunctionComponent<CampusCoursesProps> = () => {
  const navigation = useNavigation<CourseNavigationProp>();

  function onCourseClick(courseData: any){
    navigation.navigate('Course');
  }

  return (
    <PageLayout 
      showHeader
      canGoBack      
    >
      <TitleOutline title="Cursos" icon={AssetWidgetCoursesIcon} />
      <Spacer verticalSpace={32} />

      <RobotContainer>

        <Avatar source={AssetRobotNormalIcon} diameter={80} padding={16} />
        <CardBaloon direction="left">
          <Paragraph 
            paddingLeft="8px" 
            paddingRight="8px" 
            paddingTop="8px" 
            paddingBottom="8px" 
            fontSize="16px"
            justify
          >
            Atualmente no Campus Garanhuns, possuímos 10 cursos presenciais.
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

      <ButtonCourse onPress={() => onCourseClick({})} title="Pedagogia" />
      <Spacer verticalSpace={18} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Geografia" />
      <Spacer verticalSpace={18} />

      <ButtonCourse onPress={() => onCourseClick({})} title="Matemática" />
      <Spacer verticalSpace={18} />

    </PageLayout>
  );
}
