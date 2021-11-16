import React, { FunctionComponent } from 'react';
import { useTheme } from '../../hooks';
import { Text } from './styles';

export interface ParagraphProps {
  children: string;
  numberOfLines?: number;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({children, ...props}) => {
  const [theme] = useTheme();

  return (
    <Text {...theme} {...props}>{children}</Text>
  );
}
