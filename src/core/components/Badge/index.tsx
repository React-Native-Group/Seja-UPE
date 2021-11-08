import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Container, Label } from './styles';

export interface BadgeProps {
  bgColor?: string;
  color?: string;
  numberOfLines?: number;
  width?: string;
  maxWidth?: string;
  onPress?: (e: GestureResponderEvent) => void;
  text: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({ bgColor, color, numberOfLines, text, onPress, width, maxWidth }) => {
  return (
    <Container 
      onPress={onPress || (() => {})}
      activeOpacity={0.7}
      width={width || '100%'} 
      maxWidth={maxWidth || '100%'} 
      bgColor={bgColor || '#ED3237'}
    >
      <Label 
        color={color || '#fff'} 
        numberOfLines={numberOfLines || 1} 
      >
        {text}
      </Label>
    </Container>
  );
}
