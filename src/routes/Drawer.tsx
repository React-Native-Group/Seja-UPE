import React, { FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
  Suggestions,
  Survey,
  Tests,
  Welcome
} from '../pages';

import { RoutesParamList } from './Types';

const Drawer = createDrawerNavigator<RoutesParamList>();

export interface DrawerRoutesProps { }
 
export const DrawerRoutes: FunctionComponent<DrawerRoutesProps> = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false
      }}
    >
      <Drawer.Screen 
        name="Tests" 
        component={Tests} 
      />
      <Drawer.Screen 
        name="Campus" 
        component={Campus} 
      />
      <Drawer.Screen 
        name="CampusContact" 
        component={CampusContact} 
      />
      <Drawer.Screen 
        name="CampusCourses" 
        component={CampusCourses} 
      />
      <Drawer.Screen 
        name="CampusEvents" 
        component={CampusEvents} 
      />
      <Drawer.Screen 
        name="Course" 
        component={Course} 
      />
      <Drawer.Screen 
        name="CourseConcurrency" 
        component={CourseConcurrency} 
      />
      <Drawer.Screen 
        name="CoursePlanning" 
        component={CoursePlanning} 
      />
      <Drawer.Screen 
        name="CourseProfessor" 
        component={CourseProfessor} 
      />
      <Drawer.Screen 
        name="CourseProfessors" 
        component={CourseProfessors} 
      />
      <Drawer.Screen 
        name="Suggestions" 
        component={Suggestions} 
      />
      <Drawer.Screen 
        name="Survey" 
        component={Survey} 
      />
      <Drawer.Screen 
        name="Welcome" 
        component={Welcome} 
      />
    </Drawer.Navigator>
  );
}
