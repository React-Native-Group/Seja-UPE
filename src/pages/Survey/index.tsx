import React, { FunctionComponent, useRef, useState } from 'react';
import { AssetRobotNormalIcon } from '../../assets';

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
} from '../../core/components';

import {
  ButtonContainer,
  ButtonSpacer,
  ChoiceContainer,
  RadioContainer,
  RobotContainer
} from './styles';

export interface SurveyProps { }

export const Survey: FunctionComponent<SurveyProps> = () => {
  const maxProgress = 15;
  const [progress, setProgress] = useState(1);
  const [group, setGroup] = useRadioGroup(5);
  const responses = useRef([]);

  function choiceChanged(e: number){
    console.log('Escolhido: ' + e)
  }

  function doSurveyBack(){
    setProgress(progress-1)
  }

  function doSurveyAdvance(){
    setProgress(progress+1)
  }

  function doSurveyFinish(){

  }

  return (
    <PageLayout 
      showHeader
      canScroll
    >
      <Progress value={progress} maxValue={maxProgress} />
      <Spacer verticalSpace={16} />

      <RobotContainer>
        <Avatar source={AssetRobotNormalIcon} diameter={128} padding={16} />
      </RobotContainer>

      <Spacer verticalSpace={4} />

      <CardBaloonBottom>
        <Paragraph 
          fontSize="16px" 
          paddingLeft="8px" 
          paddingRight="8px" 
          paddingTop="8px" 
          paddingBottom="8px"
        >
          Você gosta de disciplinas como Matemática, Física, Química? Que tal cálculos?
        </Paragraph>
      </CardBaloonBottom>

      <Spacer verticalSpace={32} />

      <ChoiceContainer>
        <RadioContainer>
          <Radio 
            reference={group[0]} 
            group={group} 
            onPress={choiceChanged} 
            onHandle={setGroup} 
          />
        </RadioContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ChoiceContainer>
      <Spacer verticalSpace={16} />

      <ChoiceContainer>
        <RadioContainer>
          <Radio 
            reference={group[1]} 
            group={group} 
            onPress={choiceChanged} 
            onHandle={setGroup} 
          />
        </RadioContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ChoiceContainer>
      <Spacer verticalSpace={16} />

      <ChoiceContainer>
        <RadioContainer>
          <Radio 
            reference={group[2]} 
            group={group} 
            onPress={choiceChanged} 
            onHandle={setGroup} 
          />
        </RadioContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ChoiceContainer>
      <Spacer verticalSpace={16} />

      <ChoiceContainer>
        <RadioContainer>
          <Radio 
            reference={group[3]} 
            group={group} 
            onPress={choiceChanged} 
            onHandle={setGroup} 
          />
        </RadioContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ChoiceContainer>
      <Spacer verticalSpace={16} />

      <ChoiceContainer>
        <RadioContainer>
          <Radio 
            reference={group[4]} 
            group={group} 
            onPress={choiceChanged} 
            onHandle={setGroup} 
          />
        </RadioContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet
        </Paragraph>
      </ChoiceContainer>
      <Spacer verticalSpace={48} />

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
            onPress={progress == maxProgress ? doSurveyFinish : doSurveyAdvance}
            bgColor="blue"
            color="white"
          />
        </ButtonContainer>

      </HorizontalContent>


    </PageLayout>
  );
}
