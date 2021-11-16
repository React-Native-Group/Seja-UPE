import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';

import { AssetBookIcon } from '../../../assets';
import { useTheme } from '../../hooks';
import { Banner, Container, Icon, Title } from './styles';

export interface ButtonCourseProps {
  onPress?: (e: GestureResponderEvent) => void,
  title: string
}

export const ButtonCourse: FunctionComponent<ButtonCourseProps> = ({ onPress, title }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <Banner resizeMode="contain" source={AssetBookIcon} />
      <Title {...theme} numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color={theme.gray} />
    </Container>
  );
}
