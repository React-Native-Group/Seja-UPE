import React, { FunctionComponent, useEffect, useState } from 'react';
import { Bar, Container, Label } from './styles';

export interface ProgressProps {
  value: number,
  maxValue: number
}

export const Progress: FunctionComponent<ProgressProps> = ({ value, maxValue }) => {
  const [color, setColor] = useState('#252525');

  useEffect(() => {
    if ((value / maxValue) > 0.93)
      setColor('#fff');
    else 
      setColor('#252525');
  }, [value, maxValue]);

  return (
    <Container>
      <Bar style={{ width: Math.floor(100 * value / maxValue) + '%' }} />
      <Label color={color}>
        {value}/{maxValue}
      </Label>
    </Container>
  );
}
