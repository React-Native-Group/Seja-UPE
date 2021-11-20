import React, { FunctionComponent } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';
import { Container, Label } from './styles';
import { useTheme } from '../../hooks';

export interface ButtonStepProps {
  text: string;
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonStep: FunctionComponent<ButtonStepProps> = ({ text, onPress = (() => {}) }) => {
  const [theme] = useTheme();
  
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <Label {...theme}>{text}</Label>
      <FontAwesome5 
        name="arrow-right" 
        size={24} 
        color={theme.blue} 
      />
    </Container>
  );
}
