import React, { Fragment, FunctionComponent } from 'react';
import { Bar, Container } from './styles';

export interface ProgressProps {
  value: number,
  maxValue: number
}

export const Progress: FunctionComponent<ProgressProps> = ({ value, maxValue }) => {
  return (
    <Container>
      <Bar style={{ width: Math.floor(100 * value / maxValue) + '%' }}>

      </Bar>
    </Container>
  );
}
