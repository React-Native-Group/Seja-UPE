import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native';

import { AssetRobotAskingIcon, AssetRobotKindIcon } from '../../assets';
import { CourseNavigationProp, SearchResultsNavigationProp, SurveyNavigationProp } from '../../routes';
import { CampusCourse, CampusWithCourse, useCampusData, useSurveyResults, useTheme } from '../../core/hooks';

import { SurveyValue } from '../../core/config';
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

  const [tab, setTab] = useState<'search' | 'suggestions'>('search');
  const [toggle, setToggle] = useState<'ssa' | 'sisu'>('ssa');
  const [noteRange, setNoteRange] = useState<MultiSliderValue>({ lowerValue: 0, higherValue: 0 });
  const [surveyDone, setSurveyDone] = useState(true);
  const [viewType, setViewType] = useState<ToggleType>('horizontal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseSuggestions, setCourseSuggestions] = useState<CourseSuggestionType[]>([]);
  const [campusSuggestions, setCampusSuggestions] = useState<CampusSuggestionType[]>([]);
  
  const [campusInfo] = useCampusData();
  const [surveyResults] = useSurveyResults();

  useEffect(() => {
    // if (tab == 'suggestions')
    //   setTimeout(() => setIsModalOpen(true), 5000);
  }, [tab]);

  useEffect(() => {
    if ((surveyResults.length > 0) && !!campusInfo){
      
      let buffer = campusInfo.map((campus: CampusWithCourse) => {
        
        let courseSuggestions: CourseSuggestionType[] = [];
        let totalCourses = campus.courses?.length ?? 0;

        for (let k = 0; k < totalCourses; k++) {
          let course = campus.courses[k];

          if (!!course) {
            let [courseScore] = surveyResults.filter(([_, id]: SurveyValue) => course?.id == id);

            courseSuggestions.push({
              Campus: campus,
              Course: course,
              Score: Number((courseScore[0] / 15).toFixed(0))
            });
          }
        }

        return courseSuggestions;
      });

      let scores: CourseSuggestionType[] = [];

      for (let k = 0; k < buffer.length; k++){
        scores = scores.concat(buffer[k]);
      }

      setCourseSuggestions(scores);
      setCampusSuggestions(campusInfo.map((campus: CampusWithCourse) => {
        let x = scores.filter((suggestion: CourseSuggestionType) => suggestion.Campus.id == campus.id);
        return {
          Campus: campus,
          CourseSuggestions: x
        }
      }));

    }
  }, [campusInfo, surveyResults]);


  function onSurveyButtonClick(isSurveyDone: boolean) {
    navigation.navigate('Survey');
    if (!isSurveyDone){
      setSurveyDone(true);
    }
    console.log(isSurveyDone)
  }

  function onCourseClick(courseData: CampusCourse) {
    if (!!campusInfo){
      navigation.navigate('Course', { 
        Campus: campusInfo[0],
        Course: courseData
      });
    }
  }

  function onCampusSelected(campus: SelectOption){
    console.log(campus)
  }

  function onCourseSelected(course: SelectOption){
    console.log(course)
  }

  function onSearchClick(){
    navigation.navigate('SearchResults');
  }

  const campusList = [
    { key: 0, label: 'Campus Garanhuns' },
    { key: 1, label: 'Campus Serra Talhada' },
    { key: 2, label: 'Campus Mata Norte' },
    { key: 3, label: 'Campus Caruaru' },
    { key: 4, label: 'Campus Benfica' }
  ];

  const courseList = [
    { key: 0, label: 'Medicina' },
    { key: 1, label: 'Engenharia Civil' },
    { key: 2, label: 'Engenharia de Software' },
    { key: 3, label: 'Direito' },
    { key: 4, label: 'Psicologia' }
  ];

  return (
    <PageLayout
      showHeader
      showTabs
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
          data={campusList}
          placeholder="Escolha o Campus (Opcional)" 
          onSelect={onCampusSelected} 
        />
        <Spacer verticalSpace={24} />

        <TitleOutline title="Curso" bold={false} />
        <Spacer verticalSpace={16} />

        <Select 
          data={courseList}
          placeholder="Escolha o Curso (Opcional)" 
          onSelect={onCourseSelected} 
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
                Encontrei 7 cursos com base nas informações que você me passou.
              </Paragraph>

              <Spacer verticalSpace={8} />

              <RobotContainerRow>
                <Badge
                  bold
                  text="Refazer questionário"
                  bgColor={theme.red}
                  maxWidth="160px"
                  onPress={() => onSurveyButtonClick(surveyDone)}
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
              initial="horizontal"
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
                  keyExtractor={() => String(Math.floor(Math.random() * 10000))}
                  data={suggestion.CourseSuggestions}
                  horizontal={true}
                  style={{ width: '100%'}}
                  alwaysBounceHorizontal={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <ListItemContainer key={String(item.Course.id)}>
                      <CardSuggestion
                        key={String(item.Course.id)}
                        title={item.Course.name}
                        progress={String(item.Score)}
                        onPress={() => onCourseClick(item.Course)}
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
            {courseSuggestions.map((item: CourseSuggestionType) => {
              return (
              <Fragment key={String(item.Course.id)}>
                <ButtonSuggestion 
                  key={item.Course.id}
                  title={item.Course.name} 
                  onPress={() => onCourseClick(item.Course)} 
                  progress={String(item.Score)}
                />
                <Spacer verticalSpace={18} />
              </Fragment>
              )
            })}
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
                  onPress={() => onSurveyButtonClick(surveyDone)}
                />
              </SurveyButtonContainer>
            </VerticalContent>
          </CardBaloonBottom>
        </Render>

      </Render>

      <ModalEvaluation 
        type="rating" 
        isOpen={isModalOpen} 
        onResult={console.log} 
      />
      
    </PageLayout>
  );
}
