import React, { FunctionComponent, ReactNode } from 'react';
import { Container } from './styles';

export interface HorizontalContentProps {
  children?: ReactNode;
}
 
export const HorizontalContent: FunctionComponent<HorizontalContentProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
