import React, { Fragment, FunctionComponent, useState } from 'react';
import { FlatList } from 'react-native';
import { AssetRobotAskingIcon } from '../../assets';

import {
  Avatar,
  Badge,
  CardBaloon,
  CardBaloonBottom,
  CardSuggestion,
  PageLayout,
  Paragraph,
  Render,
  Spacer,
  TitleOutline,
  VerticalContent
} from '../../core/components';

import { useTheme } from '../../core/hooks';
import { RobotContainer } from '../CampusCourses/styles';
import { RobotContainerRow, SurveyButtonContainer } from './styles';

export interface SuggestionsProps {
  
}

export const Suggestions: FunctionComponent<SuggestionsProps> = () => {
  const [theme] = useTheme();

  const [tab, setTab] = useState<'search' | 'suggestions'>('search');
  const [surveyDone, setSurveyDone] = useState(true);

  const courseList = [
    
  ];

  function onSurveyButtonClick(isSurveyDone: boolean){
    console.log(isSurveyDone)
  }

  function onCourseClick(courseData: any){

  }

  return (
    <PageLayout 
      showHeader
      showTabs
      canGoBack
      canScroll
      onTabClick={setTab}
    >

      <Render if={tab == 'search'}>

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
          <Spacer verticalSpace={16} />

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
