import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetLattesWhiteLogo } from '../../../assets';
import { Container, Logo } from './styles';

export interface ButtonLattesProps {
  onPress?: (e: GestureResponderEvent) => void
}

export const ButtonLattes: FunctionComponent<ButtonLattesProps> = ({ onPress }) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress || (() => {})}>
      <Logo resizeMode="contain" source={AssetLattesWhiteLogo} />
    </Container>
  );
}
