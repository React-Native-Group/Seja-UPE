import React, { FunctionComponent } from 'react';
import { Container, Text } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

export interface ButtonLinkProps {
  iconName: string;
  iconColor?: string;
  textColor?: string;
  text: string;
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ iconName, iconColor, textColor, text, onPress }) => {
  return (
    <Container onPress={onPress ?? (() => {})}>
      <FontAwesome5 name={iconName} size={24} color={iconColor ?? '#000'} />
      <Text numberOfLines={1} textColor={textColor ?? '#000'}>{text}</Text>
    </Container>
  );
}
