import React, { Fragment, FunctionComponent, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native';

import { SurveyValue } from '../../core/config';

import {
  AssetRobotAskingIcon,
  AssetRobotKindIcon
} from '../../assets';

import {
  CourseNavigationProp,
  SearchResultsNavigationProp,
  SurveyNavigationProp
} from '../../routes';

import {
  CampusCourse,
  CampusWithCourse,
  useCampusData,
  useEnterScreen,
  useEvaluation,
  useRatingSurvey,
  useSurveyResults,
  useTheme
} from '../../core/hooks';

import {
  Avatar,
  Badge,
  Button,
  CardBaloon,
  CardBaloonBottom,
  CardSuggestion,
  HorizontalContent,
  MultiSlider,
  MultiSliderValue,
  PageLayout,
  Paragraph,
  Render,
  Select,
  SelectOption,
  Spacer,
  TitleOutline,
  ToggleGroup,
  ToggleType,
  ToggleView,
  VerticalContent,
  ButtonSuggestion,
  ModalEvaluation
} from '../../core/components';

import {
  ResultsTitleContainer,
  RobotContainer,
  RobotContainerRow,
  SearchButtonSpacer,
  SliderTitle,
  SurveyButtonContainer,
  ListItemContainer
} from './styles';

type CourseSuggestionType = {
  Campus: CampusWithCourse;
  Course: CampusCourse;
  Score: number;
}

type CampusSuggestionType = {
  Campus: CampusWithCourse;
  CourseSuggestions: CourseSuggestionType[];
}

export interface SuggestionsProps { }

export const Suggestions: FunctionComponent<SuggestionsProps> = () => {
  const navigation = useNavigation<SearchResultsNavigationProp | CourseNavigationProp | SurveyNavigationProp>();

  const [theme] = useTheme();

  const [surveyDone, setSurveyDone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [toggle, setToggle] = useState<'ssa' | 'sisu'>('ssa');
  const [tab, setTab] = useState<'search' | 'suggestions'>('search');
  const [viewType, setViewType] = useState<ToggleType>('horizontal');

  const [campusSelected, setCampusSelected] = useState<SelectOption>();
  const [courseSelected, setCourseSelected] = useState<SelectOption>();
  const [campusOptions, setCampusOptions] = useState<SelectOption[]>([]);
  const [courseOptions, setCourseOptions] = useState<SelectOption[]>([]);
  const [noteRange, setNoteRange] = useState<MultiSliderValue>({ lowerValue: 0, higherValue: 0 });

  const [courseSuggestions, setCourseSuggestions] = useState<CourseSuggestionType[]>([]);
  const [campusSuggestions, setCampusSuggestions] = useState<CampusSuggestionType[]>([]);
  
  const courseList = useRef<CampusCourse[]>([]);
  const modalTask = useRef<NodeJS.Timeout>();

  const [campusInfo] = useCampusData();
  const [surveyResults] = useSurveyResults();
  const [addEvaluation, hasEvaluation] = useEvaluation();

  const [,,rate] = useRatingSurvey(() => {});

  useEffect(() => {
    setCampusSelected(undefined);
    setCourseSelected(undefined);
    if (modalTask.current)
      clearTimeout(modalTask.current);
    if (tab == 'suggestions'){
      setTimeout(() => {
        if (surveyDone && !hasEvaluation('course', 0)){
          addEvaluation({ type: 'survey', id: 0 });
          setIsModalOpen(true);
        }
      }, 6000);
    }
  }, [tab]);

  useEffect(() => {
    if ((surveyResults.length > 0) && !!campusInfo){
      
      let buffer = campusInfo.map((Campus: CampusWithCourse) => {
        let courseSuggestions: CourseSuggestionType[] = [];

        Campus.courses.forEach((Course?: CampusCourse) => {
          if (!!Course) {
            let [score] = surveyResults.filter(([_, id]: SurveyValue) => Course?.id == id);
            
            courseSuggestions.push({
              Campus,
              Course,
              Score: Number(score[0])
            });
          }
        });
        
        return courseSuggestions;
      });
      
      let scores: CourseSuggestionType[] = [];
      
      buffer.forEach((score: CourseSuggestionType[]) => {
        scores = scores.concat(score);
      });
      
      setSurveyDone(true);
      setCourseSuggestions(scores.sort((c1: CourseSuggestionType, c2: CourseSuggestionType) => c2.Score - c1.Score));
      setCampusSuggestions(campusInfo.map((campus: CampusWithCourse) => {
        return {
          Campus: campus,
          CourseSuggestions: scores.filter((suggestion: CourseSuggestionType) => suggestion.Campus.id == campus.id)
        }
      }));

    }
  }, [campusInfo, surveyResults]);

  useEffect(() => {
    if (!!campusInfo){
      let courses: CampusCourse[] = [];

      setCampusOptions(campusInfo.map((campus: CampusWithCourse) => {
        campus.courses.forEach((course?: CampusCourse) => {
          if (!!course)
            courses.push(course);
        });
        return {
          key: campus.id,
          label: campus.name
        }
      }));

      setCourseOptions(courses.map((course: CampusCourse) => {
        courseList.current.push(course);
        return {
          key: course.id,
          label: course.name
        }
      }));

      courseList.current = courses;
    }
  }, [campusInfo]);

  useEnterScreen(() => {
    setSurveyDone((surveyResults.length > 0) && !!campusInfo);
  });
  
  function onRatingSurvey(result: number | 'like' | 'dislike') {
    rate(Number(result));
  }

  function onSurveyButtonClick() {
    navigation.navigate('Survey');
  }

  function onCourseClick(courseData: CampusCourse, campusData: CampusWithCourse) {
    if (!!campusInfo){
      navigation.navigate('Course', { 
        Campus: campusData,
        Course: courseData
      });
    }
  }

  function onSearchClick(){
    const [campus] = campusInfo?.filter((v: CampusWithCourse) => v.id === campusSelected?.key) ?? [];
    let params: CampusCourse[] = courseList.current
      .filter((courseA: CampusCourse) => !campus || campus?.courses.some((courseB?: CampusCourse) => courseA.id == courseB?.id))
      .filter((course: CampusCourse) => !courseSelected || (course.id === courseSelected.key))
      .filter((course: CampusCourse) => {
        const [grade] = course[toggle == 'ssa' ? 'ssaGrades' : 'sisuGrades'].slice(-1);
        return (Number(grade.lowest) >= noteRange.lowerValue) && (Number(grade.lowest) <= noteRange.higherValue);
      });
    navigation.navigate('SearchResults', params);
  }

  return (
    <PageLayout
      showHeader
      showTabs
      showFab
      onTabClick={setTab}
    >

      <Render if={tab == 'search'}>

        <ToggleGroup onChange={setToggle} />
        <Spacer verticalSpace={24} />

        <SliderTitle {...theme}>Minha nota está entre</SliderTitle>
        <Spacer verticalSpace={4} />
        
        <Render if={toggle == 'ssa'}>
          <MultiSlider 
            minValue={0} 
            maxValue={100} 
            minDistance={10} 
            onChange={setNoteRange}
          />
        </Render>
        <Render if={toggle == 'sisu'}>
          <MultiSlider 
            minValue={0} 
            maxValue={1000} 
            minDistance={50} 
            onChange={setNoteRange}
          />
        </Render>

        <Spacer verticalSpace={24} />

        <TitleOutline title="Campus" bold={false} />
        <Spacer verticalSpace={16} />

        <Select 
          optional
          placeholder="Escolha o Campus" 
          onSelect={setCampusSelected} 
          data={campusOptions}
        />
        <Spacer verticalSpace={24} />

        <TitleOutline title="Curso" bold={false} />
        <Spacer verticalSpace={16} />

        <Select
          optional
          placeholder="Escolha o Curso"
          onSelect={setCourseSelected}
          data={courseOptions}
        />
        <Spacer verticalSpace={32} />

        <HorizontalContent>
          <SearchButtonSpacer />
          <Button
            text="Pesquisar"
            bgColor="blue"
            color="white"
            onPress={onSearchClick}
          />
          <SearchButtonSpacer />
        </HorizontalContent>

      </Render>

      <Render if={tab == 'suggestions'}>
        <Spacer verticalSpace={16} />

        <Render if={surveyDone}>

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
                {
                  "Estou te sugerindo alguns cursos que acho que combinam com você " + 
                  "com base nos resultados do seu Teste Vocacional. Nos diga o que " +
                  "acha dos nossos " + courseSuggestions.length + " cursos."
                }
              </Paragraph>

              <Spacer verticalSpace={8} />

              <RobotContainerRow>
                <Badge
                  bold
                  text="Refazer questionário"
                  bgColor={theme.red}
                  maxWidth="160px"
                  onPress={onSurveyButtonClick}
                />
              </RobotContainerRow>

              <Spacer verticalSpace={8} />
            </CardBaloon>
          </RobotContainer>

          <Spacer verticalSpace={32} />

          <ResultsTitleContainer>
            <TitleOutline title="Cursos encontrados" />
            <ToggleView
              onToggle={setViewType}
              initial={viewType}
            />
          </ResultsTitleContainer>
          <Spacer verticalSpace={32} />

          <Render if={viewType == 'horizontal'}>

            {/* Percorrer num loop e renderizar os resultados */}
            {campusSuggestions.map((suggestion: CampusSuggestionType) => (
              <Fragment key={String(suggestion.Campus.id)}>
                <TitleOutline 
                  key={String(suggestion.Campus.id)} 
                  title={suggestion.Campus.name} 
                  bold={false} 
                />
                <Spacer verticalSpace={16} />
                <FlatList
                  keyExtractor={(item) => String(item.Course.id)}
                  data={suggestion.CourseSuggestions}
                  horizontal={true}
                  style={{ width: '100%'}}
                  overScrollMode="never"
                  alwaysBounceHorizontal={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <ListItemContainer key={String(item.Course.id)}>
                      <CardSuggestion
                        key={String(item.Course.id)}
                        title={item.Course.name}
                        progress={String(item.Score)}
                        onPress={() => onCourseClick(item.Course, item.Campus)}
                      />
                    </ListItemContainer>
                  )}
                />
                <Spacer verticalSpace={16} />
              </Fragment>
            ))}

          </Render>

          <Render if={viewType == 'vertical'}>
            {/* Percorrer num loop e renderizar os resultados */}
            {courseSuggestions.map((item: CourseSuggestionType) => (
              <Fragment key={String(item.Course.id)}>
                <ButtonSuggestion
                  key={item.Course.id}
                  title={item.Course.name}
                  onPress={() => onCourseClick(item.Course, item.Campus)}
                  progress={String(item.Score)}
                />
                <Spacer verticalSpace={18} />
              </Fragment>
            ))}
          </Render>

        </Render>

        <Render if={!surveyDone}>
          <RobotContainer>
            <Avatar source={AssetRobotAskingIcon} diameter={129} padding={8} />
          </RobotContainer>

          <Spacer verticalSpace={4} />

          <CardBaloonBottom>
            <VerticalContent>
              <Paragraph
                paddingLeft="8px"
                paddingRight="8px"
                paddingTop="8px"
                paddingBottom="8px"
                justify
              >
                Preciso te conhecer melhor. Responda a um breve
                questionário para que eu possa te indicar alguns cursos.
              </Paragraph>

              <Spacer verticalSpace={8} />

              <SurveyButtonContainer>
                <Badge
                  bold
                  text="Fazer questionário"
                  bgColor={theme.blue}
                  maxWidth="160px"
                  onPress={onSurveyButtonClick}
                />
              </SurveyButtonContainer>
            </VerticalContent>
          </CardBaloonBottom>
        </Render>

      </Render>

      <ModalEvaluation 
        type="rating" 
        isOpen={isModalOpen} 
        onResult={onRatingSurvey} 
      />
      
    </PageLayout>
  );
}
