import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../../hooks';
import { Container, Icon, Title } from './styles';

export interface ButtonCourseProps {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
}

export const ButtonCourse: FunctionComponent<ButtonCourseProps> = ({ onPress, title }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <FontAwesome5 name="book" size={38} color={theme.blueNeon} />
      <Title {...theme} numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color={theme.gray} />
    </Container>
  );
}
