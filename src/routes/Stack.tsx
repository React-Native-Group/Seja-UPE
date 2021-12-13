import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Campus,
  CampusContact,
  CampusCourses,
  CampusEvents,
  Course,
  CourseConcurrency,
  CoursePlanning,
  CourseProfessor,
  CourseProfessors,
  SearchResults,
  Suggestions,
  Survey,
  Tests,
  Welcome
} from "../pages";

import { RoutesParamList } from "./Types";

const Stack = createStackNavigator<RoutesParamList>();

export interface StackRoutesProps { }
 
export const StackRoutes: FunctionComponent<StackRoutesProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Tests" 
        component={Tests} 
      />
      <Stack.Screen 
        name="Campus" 
        component={Campus} 
      />
      <Stack.Screen 
        name="CampusContact" 
        component={CampusContact} 
      />
      <Stack.Screen 
        name="CampusCourses" 
        component={CampusCourses} 
      />
      <Stack.Screen 
        name="CampusEvents" 
        component={CampusEvents} 
      />
      <Stack.Screen 
        name="Course" 
        component={Course} 
      />
      <Stack.Screen 
        name="CourseConcurrency" 
        component={CourseConcurrency} 
      />
      <Stack.Screen 
        name="CoursePlanning" 
        component={CoursePlanning} 
      />
      <Stack.Screen 
        name="CourseProfessor" 
        component={CourseProfessor} 
      />
      <Stack.Screen 
        name="CourseProfessors" 
        component={CourseProfessors} 
      />
      <Stack.Screen 
        name="SearchResults" 
        component={SearchResults} 
      />
      <Stack.Screen 
        name="Suggestions" 
        component={Suggestions} 
      />
      <Stack.Screen 
        name="Survey" 
        component={Survey} 
      />
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
      />
    </Stack.Navigator>
  );
}
