import React, { Fragment, FunctionComponent, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { RobotContainer } from './styles';
import { AssetRobotKindIcon } from '../../assets';
import { CampusCourse, CampusWithCourse, useEnterScreen } from '../../core/hooks';
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
  const navigation = useNavigation<CourseNavigationProp>();
  const route = useRoute<RouteProp<RoutesParamList, 'SearchResults'>>();

  const [foundCourses, setFoundCourses] = useState<CampusCourse[]>([]);

  useEnterScreen(() => {
    setFoundCourses(route.params.Courses.filter((courseA: CampusCourse) => {
      return route.params.Campus.some((campus: CampusWithCourse) => 
        campus.courses.some((courseB?: CampusCourse) => courseA.id == courseB?.id));
    }));
  });

  function onCourseClick(courseData?: CampusCourse){
    if (!!courseData){
      //ESSE CAMPUS DEVE SER O REFERENTE AO CURSO
      const [Campus] = route.params.Campus.filter((campus => 
        campus.courses.some(course => course?.id == courseData.id))); 
      navigation.navigate('Course', { Campus, Course: courseData });
    }
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
            {"Encontrei " + foundCourses.length + " cursos na UPE que se encaixam nos critérios que você me passou."}
          </Paragraph>
        </CardBaloon>
      </RobotContainer>

      <Spacer verticalSpace={32} />

      {foundCourses.map((course?: CampusCourse) => (
        <Fragment key={String(course?.id)}>
          <ButtonCourse 
            onPress={() => onCourseClick(course)} 
            title={course?.name ?? ""} 
          />
          <Spacer verticalSpace={18} />
        </Fragment>
      ))}

    </PageLayout>
  );
}
