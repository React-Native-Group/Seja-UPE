import React, { FunctionComponent, SetStateAction, useState } from "react";
import { useTheme } from "../../hooks";

import { Render } from "../Render";
import { Container, InnerContainer } from "./styles";

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

export type RadioGroupHook = [RadioType[], React.Dispatch<React.SetStateAction<RadioType[]>>, () => void];

export function useRadioGroup(choices: number): RadioGroupHook
{
  let group: RadioType[] = [];
  for (let k = 0; k < choices; k++){
    group.push({ index: k, active: false });
  }
  const [state, setState] = useState<RadioType[]>(group);
  function clearChoices(){
    setState(group.map(v => ({...v, active: false })));
  }
  return [state, setState, clearChoices];
}

export const Radio: FunctionComponent<RadioProps> = ({ reference, group, onPress, onHandle }) => {
  const [theme] = useTheme();

  function radioHandler(e: number){
    onHandle(group.map(v => {
      v.active = v.index == e;
      return v;
    }));
    onPress(e);
  }

  return (
    <Container {...theme} activeOpacity={0.7} onPress={() => radioHandler(reference.index)} testID="radio.container">
      <Render if={reference.active}>
        <InnerContainer {...theme} />
      </Render>
    </Container>
  );
}
