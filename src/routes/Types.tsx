import { DrawerNavigationProp } from "@react-navigation/drawer"
import { Campus, CampusCourse, Professor } from "../core/hooks";

export type RoutesParamList = {
  Tests: undefined;
  Campus: any;
  CampusContact: any;
  CampusCourses: any;
  CampusEvents: any;
  Course: { Campus: Campus, Course: CampusCourse };
  CourseConcurrency: any;
  CoursePlanning: any;
  CourseProfessor: Professor;
  CourseProfessors: any;
  SearchResults: any;
  Suggestions: any;
  Survey: any;
  Welcome: any;
}

type ParameterizedRoute<T extends keyof RoutesParamList> = DrawerNavigationProp<RoutesParamList, T>;

export type TestsNavigationProp             = ParameterizedRoute<'Tests'>;
export type CampusNavigationProp            = ParameterizedRoute<'Campus'>;
export type CampusContactNavigationProp     = ParameterizedRoute<'CampusContact'>;
export type CampusCoursesNavigationProp     = ParameterizedRoute<'CampusCourses'>;
export type CampusEventsNavigationProp      = ParameterizedRoute<'CampusEvents'>;
export type CourseNavigationProp            = ParameterizedRoute<'Course'>;
export type CourseConcurrencyNavigationProp = ParameterizedRoute<'CourseConcurrency'>;
export type CoursePlanningNavigationProp    = ParameterizedRoute<'CoursePlanning'>;
export type CourseProfessorNavigationProp   = ParameterizedRoute<'CourseProfessor'>;
export type CourseProfessorsNavigationProp  = ParameterizedRoute<'CourseProfessors'>;
export type SearchResultsNavigationProp     = ParameterizedRoute<'SearchResults'>;
export type SuggestionsNavigationProp       = ParameterizedRoute<'Suggestions'>;
export type SurveyNavigationProp            = ParameterizedRoute<'Survey'>;
export type WelcomeNavigationProp           = ParameterizedRoute<'Welcome'>;
