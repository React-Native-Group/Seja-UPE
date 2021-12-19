import React, { FunctionComponent } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, Label } from "./styles";
import { useTheme } from "../../hooks";

export interface CardVacancyProps {
  value: number
}

export const CardVacancy: FunctionComponent<CardVacancyProps> = ({ value }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme}>
      <FontAwesome5 name="people-carry" size={28} color={theme.blue} /> 
      <Label {...theme}>{value}</Label>
    </Container>
  );
}
