import React, { Fragment, FunctionComponent } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Label } from './styles';
import { useTheme } from '../../hooks';


export interface CardBenefitedProps {
  value: number
}

export const CardBenefited: FunctionComponent<CardBenefitedProps> = ({ value }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme}>
      <FontAwesome5 name="people-carry" size={28} color={theme.blue} /> 
      <Label {...theme}>{value}</Label>
    </Container>
  );
}
