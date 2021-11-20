import React, { FunctionComponent, useState } from 'react';
import { AssetRobotNormalIcon } from '../../assets';
import {
  Avatar,
  CardBaloonBottom,
  createRadioGroup,
  PageLayout,
  Paragraph,
  Progress,
  Radio,
  RadioType,
  Spacer
} from '../../core/components';
import { ChoiceContainer, RadioContainer, RobotContainer } from './styles';

export interface SurveyProps {
  
}

export const Survey: FunctionComponent<SurveyProps> = () => {
  const [progress, setProgress] = useState(1);
  const [group, setGroup] = useState<RadioType[]>(createRadioGroup(5));

  function choiceChanged(e: number){
    console.log('Escolhido: ' + e)
  }

  return (
    <PageLayout 
      showHeader
      canScroll
    >
      <Progress value={progress} maxValue={15} />
      <Spacer verticalSpace={16} />

      <RobotContainer>
        <Avatar source={AssetRobotNormalIcon} diameter={128} padding={16} />
      </RobotContainer>

      <Spacer verticalSpace={4} />

      <CardBaloonBottom>
        <Paragraph fontSize="16px" paddingLeft="8px" paddingRight="8px" paddingTop="8px" paddingBottom="8px">
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
      <Spacer verticalSpace={16} />

    </PageLayout>
  );
}
