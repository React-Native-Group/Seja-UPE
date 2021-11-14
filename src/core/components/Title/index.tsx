import React, { FunctionComponent } from 'react';
import { Text, Container } from './styles';

export interface TitleProps {
  align?: 'center' | 'left' | 'right' | 'justify';
  children: string;
}

export const Title: FunctionComponent<TitleProps> = ({ children, align }) => {
  return (
    <Container>
      <Text align={align ?? 'left'}>{children}</Text>
    </Container>
  );
}
