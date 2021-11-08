import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Container, Label } from './styles';

export interface BadgeProps {
  bgColor?: string;
  color?: string;
  numberOfLines?: number;
  width?: string;
  maxWidth?: string;
  animated?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  text: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({ 
  bgColor,
  color,
  numberOfLines,
  text,
  animated,
  onPress,
  width,
  maxWidth 
}) => {
  if (typeof animated == 'undefined')
    animated = true;

  return (
    <Container 
      onPress={onPress || (() => {})}
      activeOpacity={!!animated ? 0.7 : 1}
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
