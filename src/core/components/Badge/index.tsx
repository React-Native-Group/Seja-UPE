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
  bold?: boolean;
  fontSize?: string;
  hasShadow?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  text: string;
}

export const Badge: FunctionComponent<BadgeProps> = (props) => {

  let { bgColor, color, numberOfLines } = props;
  let { text, animated, onPress, hasShadow } = props;
  let { width, maxWidth, fontSize, bold } = props;

  if (typeof animated == 'undefined')
    animated = true;

  return (
    <Container 
      onPress={onPress || (() => {})} 
      activeOpacity={!!animated ? 0.7 : 1} 
      width={width || '100%'} 
      maxWidth={maxWidth || '100%'} 
      bgColor={bgColor || '#ED3237'} 
      hasShadow={!!hasShadow}
    >
      <Label 
        fontSize={fontSize || '10px'} 
        color={color || '#fff'} 
        numberOfLines={numberOfLines || 1} 
        bold={!!bold}
      >
        {text}
      </Label>
    </Container>
  );
}
