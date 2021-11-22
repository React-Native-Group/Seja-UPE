import React, { FunctionComponent, useState } from 'react';
import { FlatList } from 'react-native';

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
  VerticalContent
} from '../../core/components';

import { useTheme } from '../../core/hooks';
import { AssetRobotAskingIcon } from '../../assets';

import {
  RobotContainer,
  RobotContainerRow,
  SearchButtonSpacer,
  SliderTitle,
  SurveyButtonContainer
} from './styles';

export interface SuggestionsProps { }

export const Suggestions: FunctionComponent<SuggestionsProps> = () => {
  const [theme] = useTheme();

  const [tab, setTab] = useState<'search' | 'suggestions'>('search');
  const [toggle, setToggle] = useState<'ssa' | 'sisu'>('ssa');
  const [noteRange, setNoteRange] = useState<MultiSliderValue>({ lowerValue: 0, higherValue: 0 });
  const [surveyDone, setSurveyDone] = useState(false);

  function onSurveyButtonClick(isSurveyDone: boolean) {
    console.log(isSurveyDone)
  }

  function onCourseClick(courseData: any) {

  }

  function onCampusSelected(campus: SelectOption){

  }

  function onCourseSelected(course: SelectOption){

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
      canGoBack
      canScroll
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
          />
          <SearchButtonSpacer />
        </HorizontalContent>


      </Render>

      <Render if={tab == 'suggestions'}>
        <Spacer verticalSpace={16} />

        <Render if={surveyDone}>

          <RobotContainer>
            <Avatar source={AssetRobotAskingIcon} diameter={96} padding={8} />

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

          <TitleOutline title="Campus Garanhuns" bold={false} />
          <Spacer verticalSpace={16} />

          <FlatList
            data={[]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            renderItem={({ item }) => (
              <CardSuggestion
                title={''}
                progress={''}
                onPress={() => onCourseClick(item)}
              />
            )}
          />

          <TitleOutline title="Campus Serra Talhada" bold={false} />
          <Spacer verticalSpace={16} />

          <TitleOutline title="Campus Salgueiro" bold={false} />
          <Spacer verticalSpace={24} />

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

    </PageLayout>
  );
}
