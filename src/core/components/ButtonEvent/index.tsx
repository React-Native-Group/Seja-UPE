import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetStarIcon } from '../../../assets';
import { Banner, Container, Icon, Title } from './styles';

export interface ButtonEventProps {
  onPress?: (e: GestureResponderEvent) => void,
  title: string
}

export const ButtonEvent: FunctionComponent<ButtonEventProps> = ({ onPress, title }) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress || (() => {})}>
      <Banner resizeMode="contain" source={AssetStarIcon} />
      <Title numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color="#C4C4C4" />
    </Container>
  );
}
