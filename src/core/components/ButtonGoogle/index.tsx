import React, { Fragment, FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetGoogleLogo } from '../../../assets';
import { Container, Label, Logo } from './styles';
export interface ButtonGoogleProps {
  onPress: (e: GestureResponderEvent) => void,
  text: string
}

export const ButtonGoogle: FunctionComponent<ButtonGoogleProps> = ({ text, onPress }) => {
  return (
    <Container activeOpacity={0.7}>
      <Logo source={AssetGoogleLogo} />
      <Label>{text}</Label>
    </Container>
  );
}
