import React, { Fragment, FunctionComponent } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { RobotContainer } from './styles';
import { CampusCourse, CampusWithCourse } from '../../core/hooks';
import { AssetRobotKindIcon } from '../../assets';
import { CourseNavigationProp, RoutesParamList } from '../../routes';

import {
  Avatar,
  ButtonCourse,
  CardBaloon,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface SearchResultsProps { }

export const SearchResults: FunctionComponent<SearchResultsProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'SearchResults'>>();
  const navigation = useNavigation<CourseNavigationProp>();

  function onCourseClick(courseData?: CampusCourse){
    let campus: CampusWithCourse = route.params.Campus; //ESSE CAMPUS DEVE SER O REFERENTE AO CURSO
    if (!!courseData)
      navigation.navigate('Course', { Campus: campus, Course: courseData });
  }

  return (
    <PageLayout
      showHeader
      canGoBack
    >
      <TitleOutline title="Cursos encontrados" />
      <Spacer verticalSpace={32} />

      <RobotContainer>
        <Avatar 
          source={AssetRobotKindIcon} 
          diameter={96} 
          padding={8} 
        />

        <CardBaloon direction="left">
          <Paragraph
            paddingLeft="8px"
            paddingRight="8px"
            paddingTop="8px"
            paddingBottom="8px"
            justify
          >
            {"Encontrei " + route.params.Courses.length + " cursos com base nas informações que você me passou."}
          </Paragraph>
        </CardBaloon>
      </RobotContainer>

      <Spacer verticalSpace={32} />

      {route.params.Courses.map((course?: CampusCourse) => {
        <Fragment key={String(course?.id)}>
          <ButtonCourse 
            onPress={() => onCourseClick(course)} 
            title={course?.name ?? ""} 
          />
          <Spacer verticalSpace={18} />
        </Fragment>
      })}

    </PageLayout>
  );
}
