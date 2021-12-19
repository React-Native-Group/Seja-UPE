import React, { Fragment, FunctionComponent, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { RobotContainer, RobotContainerRow } from './styles';
import { AssetRobotKindIcon, AssetRobotQuestionsIcon } from '../../assets';
import { CampusCourse, useEnterScreen, useTheme } from '../../core/hooks';
import { CourseNavigationProp, RoutesParamList } from '../../routes';

import {
  Avatar,
  Badge,
  ButtonCourse,
  CardBaloon,
  PageLayout,
  Paragraph,
  Render,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface SearchResultsProps { }

export const SearchResults: FunctionComponent<SearchResultsProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'SearchResults'>>();
  const navigation = useNavigation<CourseNavigationProp>();
  const [theme] = useTheme();

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
          source={foundCourses.length > 0 ? AssetRobotKindIcon : AssetRobotQuestionsIcon} 
          diameter={96} 
          padding={8} 
        />

        <CardBaloon direction="left">
          <Render if={foundCourses.length > 0}>
            <Paragraph
              paddingLeft="8px"
              paddingRight="8px"
              paddingTop="8px"
              paddingBottom="8px"
              justify
            >
              {"Encontrei " + foundCourses.length + " cursos na UPE que se encaixam nos critérios que você me passou. 😊"}
            </Paragraph>
          </Render>

          <Render if={foundCourses.length == 0}>
            <Paragraph
              paddingLeft="8px"
              paddingRight="8px"
              paddingTop="8px"
              paddingBottom="8px"
              justify
            >
              {"Poxa! Não consegui encontrar nenhum curso que satisfaça seus critérios. Mas não se preocupe, " + 
              "continue procurando que irei encontrar algo para você! 😊"}
            </Paragraph>

            <Spacer verticalSpace={8} />

            <RobotContainerRow>
              <Badge 
                text="Pesquisar novamente" 
                onPress={navigation.goBack} 
                bgColor={theme.blue}
                maxWidth="160px"
                bold 
              />
            </RobotContainerRow>

          </Render>
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
