import React, { FunctionComponent } from 'react';
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
  return (
    <Text {...props}>{children}</Text>
  );
}
