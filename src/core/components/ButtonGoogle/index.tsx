import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetGoogleLogo } from '../../../assets';
import { useTheme } from '../../hooks';
import { Container, Label, Logo } from './styles';

export interface ButtonGoogleProps {
  onPress: (e: GestureResponderEvent) => void,
  text: string
}

export const ButtonGoogle: FunctionComponent<ButtonGoogleProps> = ({ text, onPress }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme} onPress={onPress}>
      <Logo source={AssetGoogleLogo} />
      <Label {...theme} numberOfLines={2}>{text}</Label>
    </Container>
  );
}
