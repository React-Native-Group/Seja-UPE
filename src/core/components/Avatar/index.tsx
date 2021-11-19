import React, { FunctionComponent } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { Container, Image } from './styles';
import { useTheme } from '../../hooks';

export interface AvatarProps {
  source: ImageSourcePropType;
  diameter: number;
  padding?: number;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: FunctionComponent<AvatarProps> = ({ source, diameter, style, padding = 4 }) => {
  const [theme] = useTheme();

  return (
    <Container style={style} diameter={diameter + padding} {...theme}>
      <Image diameter={diameter} source={source} resizeMode="contain" {...theme}/>
    </Container>
  );
}
