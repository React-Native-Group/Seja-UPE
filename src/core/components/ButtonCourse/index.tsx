import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';

import { AssetBookIcon } from '../../../assets';
import { Banner, Container, Icon, Title } from './styles';

export interface ButtonCourseProps {
  onPress?: (e: GestureResponderEvent) => void,
  title: string
}

export const ButtonCourse: FunctionComponent<ButtonCourseProps> = ({ onPress, title }) => {
  return (
    <Container onPress={onPress ?? (() => {})}>
      <Banner resizeMode="contain" source={AssetBookIcon} />
      <Title numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color="#C4C4C4" />
    </Container>
  );
}
