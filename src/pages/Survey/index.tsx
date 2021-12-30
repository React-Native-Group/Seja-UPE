import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { Fragment, FunctionComponent, useRef, useState } from "react";

import { AssetRobotAskingIcon } from "../../assets";
import { WelcomeNavigationProp } from "../../routes";
import { getSurveyResults } from "../../core/services";
import { usePageScroll, useSurveyResults, useTheme } from "../../core/hooks";
import { Survey as SurveyConfig, SurveyChoices, SurveyType } from "../../core/config";
import {
  Avatar,
  Button,
  CardBaloonBottom,
  HorizontalContent,
  PageLayout,
  Paragraph,
  Progress,
  Radio,
  Render,
  Spacer,
  useRadioGroup
} from "../../core/components";

import {
  ButtonContainer,
  ButtonSpacer,
  ChoiceContainer,
  RadioContainer,
  RobotContainer
} from "./styles";

export interface SurveyProps { }

export const Survey: FunctionComponent<SurveyProps> = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const [theme] = useTheme();
  const pageScroll = usePageScroll();

  const [progress, setProgress] = useState(1);
  const [questions] = useState<SurveyType>(SurveyConfig);
  const [group, setGroup, clearGroup] = useRadioGroup(5);
  const [, setSurveyResults] = useSurveyResults();
  const choices = useRef<SurveyChoices>([]);
  const choiceId = useRef<number>(-1);
  
  const maxProgress = SurveyConfig.length;

  function onChoiceChanged(e: number){
    choiceId.current = e;
  }

  function doSurveyBack(){
    choiceId.current = -1;
    choices.current.pop();
    setProgress(progress-1);
    clearGroup();
    pageScroll.scrollToTop();
  }

  function doSurveyAdvance(isFinished: boolean){    
    if ((choiceId.current == -1) && !isFinished){
      Alert.alert(
        "Precisamos da sua resposta", 
        "Para prosseguir e visualizar a próxima " + 
        "pergunta, responda esta primeiro e marque " +
        "uma das opções que mais corresponde a você."
      );
    }
    if ((choiceId.current != -1)) {
      choices.current.push(questions[progress - 1].Options[choiceId.current]);
      pageScroll.scrollToTop();
      if (!isFinished){
        setProgress(progress+1);
        clearGroup();
      } else {
        setSurveyResults(getSurveyResults(choices.current));
        navigation.navigate("Suggestions");
      }
    }
    choiceId.current = -1;
  }

  return (
    <PageLayout 
      showHeader
      pageScroll={pageScroll}
    >
      <Progress value={progress} maxValue={maxProgress} />
      <Spacer verticalSpace={16} />

      <RobotContainer>
        <Avatar source={AssetRobotAskingIcon} diameter={128} padding={16} />
      </RobotContainer>

      <Spacer verticalSpace={4} />

      <CardBaloonBottom>
        <Paragraph 
          fontSize="16px" 
          paddingLeft="8px" 
          paddingRight="8px" 
          paddingTop="8px" 
          paddingBottom="8px"
          justify
        >
          {questions[progress-1].Question}
        </Paragraph>
      </CardBaloonBottom>

      <Spacer verticalSpace={32} />

      {questions[progress - 1].Options.map((option, i) => (
        <Fragment key={String(i)}>
          <ChoiceContainer {...theme}>
            <RadioContainer>
              <Radio
                reference={group[i]}
                group={group}
                onPress={onChoiceChanged}
                onHandle={setGroup}
              />
            </RadioContainer>
            <Paragraph>
              {option.Text} 
            </Paragraph>
          </ChoiceContainer>
          <Spacer verticalSpace={16} />
        </Fragment>
      ))}
      <Spacer verticalSpace={32} />

      <HorizontalContent>

        <Render if={progress > 1}>
          <ButtonContainer>
            <Button 
              text="Voltar" 
              bgColor="white" 
              color="blue" 
              onPress={doSurveyBack}
            />
          </ButtonContainer>

          <ButtonSpacer />
        </Render>

        <ButtonContainer>
          <Button
            text={progress == maxProgress ? "Finalizar" : "Avançar"}
            onPress={() => doSurveyAdvance(progress == maxProgress)}
            bgColor="blue"
            color="white"
          />
        </ButtonContainer>

      </HorizontalContent>

    </PageLayout>
  );
}
