import React, { FunctionComponent, useEffect, useState } from "react";
import { useTheme } from "../../hooks";
import { Bar, Container, Label } from "./styles";

export interface ProgressProps {
  value: number,
  maxValue: number
}

export const Progress: FunctionComponent<ProgressProps> = ({ value, maxValue }) => {
  const [theme] = useTheme();
  const [color, setColor] = useState(theme.black);

  useEffect(() => {
    if ((value / maxValue) > 0.93)
      setColor(theme.white);
    else 
      setColor(theme.black);
  }, [value, maxValue]);

  return (
    <Container>
      <Bar {...theme} style={{ width: Math.floor(100 * value / maxValue) + "%" }} />
      <Label color={color}>
        {value}/{maxValue}
      </Label>
    </Container>
  );
}
