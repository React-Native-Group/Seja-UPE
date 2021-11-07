import React, { Fragment, FunctionComponent } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Label } from './styles';


export interface CardBenefitedProps {
  value: number
}

export const CardBenefited: FunctionComponent<CardBenefitedProps> = ({ value }) => {
  return (
    <Container>
      <FontAwesome5 name="people-carry" size={28} color="#324A76" /> 
      <Label>{value}</Label>
    </Container>
  );
}
