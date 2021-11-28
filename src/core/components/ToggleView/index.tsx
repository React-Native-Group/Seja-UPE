import React, { FunctionComponent, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container } from './styles';
import { useTheme } from '../../hooks';

export type ToggleType = 'horizontal' | 'vertical';

export interface ToggleViewProps {
  initial: ToggleType;
  onToggle: (e: ToggleType) => void;
}

export const ToggleView: FunctionComponent<ToggleViewProps> = ({ initial, onToggle }) => {
  const [theme] = useTheme();
  const [toggle, setToggle] = useState(initial);

  function onPress(){
    let newValue: ToggleType = (toggle == 'horizontal' ? 'vertical' : 'horizontal');
    setToggle(newValue);
    onToggle(newValue);
  }

  return (
    <Container {...theme} onPress={onPress}>
      <FontAwesome5 name={'grip-' + toggle} size={18} color={theme.white} />
    </Container>
  );
}
