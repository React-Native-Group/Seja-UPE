import React, { FunctionComponent } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Group, Note } from './styles';

export interface CardConcurrencyProps {
  lowerNote: string,
  higherNote: string
}

export const CardConcurrency: FunctionComponent<CardConcurrencyProps> = ({ lowerNote, higherNote }) => {
  return (
    <Container>
      <Group>
        <MaterialCommunityIcons 
          name="chevron-double-up" 
          size={30} 
          color="#17B41E" 
        />
        <Note>{lowerNote}</Note>
      </Group>
      <Group>
        <MaterialCommunityIcons 
          name="chevron-double-down" 
          size={30} 
          color="#D7292D" 
        />
        <Note>{higherNote}</Note>
      </Group>
    </Container>
  );
}
