import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetStarIcon } from '../../../assets';
import { useTheme } from '../../hooks';
import { Banner, Container, Icon, Title } from './styles';

export interface ButtonEventProps {
  onPress?: (e: GestureResponderEvent) => void,
  title: string
}

export const ButtonEvent: FunctionComponent<ButtonEventProps> = ({ onPress, title }) => {
  const [theme] = useTheme();
  
  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <Banner resizeMode="contain" source={AssetStarIcon} />
      <Title {...theme} numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color="#C4C4C4" />
    </Container>
  );
}
