import React, { FunctionComponent } from "react";
import { RouteProp, useRoute, useNavigation} from "@react-navigation/core";

import { RobotContainer } from "./styles";
import { CampusCourse } from "../../core/hooks";
import { CourseNavigationProp, RoutesParamList } from "../../routes";

import {
  AssetWidgetCoursesIcon,
  AssetRobotKindIcon
} from "../../assets";

import {
  Avatar,
  ButtonCourse,
  CardBaloon,
  PageLayout,
  Paragraph,
  Render,
  Spacer,
  TitleOutline
} from "../../core/components";

export interface CampusCoursesProps { }

export const CampusCourses: FunctionComponent<CampusCoursesProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, "CampusCourses">>();
  const navigation = useNavigation<CourseNavigationProp>();

  function onCourseClick(course?: CampusCourse){
    if (!!course)
      navigation.navigate("Course", { Campus: route.params, Course: course });
  }

  return (
    <PageLayout 
      showHeader
      canGoBack      
    >
      <TitleOutline title="Cursos" icon={AssetWidgetCoursesIcon} />
      <Spacer verticalSpace={32} />

      <RobotContainer>

        <Avatar source={AssetRobotKindIcon} diameter={80} padding={16} />
        <CardBaloon direction="left">
          <Paragraph 
            paddingLeft="8px" 
            paddingRight="8px" 
            paddingTop="8px" 
            paddingBottom="8px" 
            fontSize="16px"
            justify
          >
            {"Atualmente no " + (route.params.name ?? "") + ", possuímos " + (route.params.courses.length ?? "") + " cursos presenciais."}
          </Paragraph>
        </CardBaloon>

      </RobotContainer>
      <Spacer verticalSpace={32} />

      {route.params.courses.map((course?: CampusCourse) => (
        <Render if={!!course} key={String(course?.id)}>
          <ButtonCourse onPress={() => onCourseClick(course)} title={course?.name ?? ""} />
          <Spacer verticalSpace={18} />
        </Render>
      ))}

    </PageLayout>
  );
}
