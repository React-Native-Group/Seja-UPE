import React, { FunctionComponent, ReactNode } from 'react';
import { Container } from './styles';

export interface VerticalContentProps {
  children?: ReactNode;
}
 
export const VerticalContent: FunctionComponent<VerticalContentProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
