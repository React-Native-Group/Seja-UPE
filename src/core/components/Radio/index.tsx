import React, { FunctionComponent, SetStateAction } from 'react';

import { Render } from '../Render';
import { Container, InnerContainer } from './styles';

export interface RadioType {
  index: number;
  active: boolean;
}

export interface RadioProps {
  reference: RadioType;
  group: RadioType[];
  onPress: (e: number) => void;
  onHandle: (v: SetStateAction<RadioType[]>) => void;
}

export function createRadioGroup(choices: number){
  let group: RadioType[] = [];
  for (let k = 0; k < choices; k++){
    group.push({ index: k, active: false });
  }
  return group;
}

export const Radio: FunctionComponent<RadioProps> = ({ reference, group, onPress, onHandle }) => {

  function radioHandler(e: number){
    onHandle(group.map(v => {
      if (v.index == e)
        v.active = true;
      else 
        v.active = false;
      return v;
    }));
    onPress(e);
  }

  return (
    <Container activeOpacity={0.7} onPress={() => radioHandler(reference.index)}>
      <Render if={reference.active}>
        <InnerContainer />
      </Render>
    </Container>
  );
}
