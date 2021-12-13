import React, { FunctionComponent } from "react";
import { useTheme } from "../../hooks";
import { Text, Container } from "./styles";

export interface TitleProps {
  align?: "center" | "left" | "right" | "justify";
  children: string;
}

export const Title: FunctionComponent<TitleProps> = ({ children, align }) => {
  const [theme] = useTheme();

  return (
    <Container>
      <Text {...theme} align={align ?? "left"}>{children}</Text>
    </Container>
  );
}
