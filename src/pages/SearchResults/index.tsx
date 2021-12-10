import React, { Fragment, FunctionComponent, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { RobotContainer } from './styles';
import { AssetRobotKindIcon } from '../../assets';
import { CampusCourse, useEnterScreen } from '../../core/hooks';
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
  const [isLoading, setIsLoading] = useState(true);

  const [foundCourses, setFoundCourses] = useState<CampusCourse[]>([]);

  useEnterScreen(() => {
    setIsLoading(true);
    setFoundCourses([...route.params]);
    setTimeout(() => setIsLoading(false), 2000);
  });

  function onCourseClick(courseData?: CampusCourse){
    if (!!courseData) navigation.navigate('CourseConcurrency', courseData);
  }

  return (
    <PageLayout
      showHeader
      showSpinner={isLoading}
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
