import React, { FunctionComponent } from 'react';
import { useTheme } from '../../hooks';
import { Text } from './styles';

export interface ParagraphProps {
  children: string;
  numberOfLines?: number;
  fontSize?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  justify?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({children, justify = false, ...props}) => {
  const [theme] = useTheme();

  return (
    <Text 
      justify={justify} 
      {...theme} 
      {...props}
    >
      {children}
    </Text>
  );
}
