import React, { FunctionComponent } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Group, Note } from "./styles";
import { useTheme } from "../../hooks";

export interface CardConcurrencyProps {
  lowerNote: string,
  higherNote: string
}

export const CardConcurrency: FunctionComponent<CardConcurrencyProps> = ({ lowerNote, higherNote }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme}>
      <Group>
        <MaterialCommunityIcons 
          name="chevron-double-up" 
          size={30} 
          color={theme.concurrencyGreen} 
        />
        <Note {...theme}>{higherNote}</Note>
      </Group>
      <Group>
        <MaterialCommunityIcons 
          name="chevron-double-down" 
          size={30} 
          color={theme.concurrencyRed} 
        />
        <Note {...theme}>{lowerNote}</Note>
      </Group>
    </Container>
  );
}
