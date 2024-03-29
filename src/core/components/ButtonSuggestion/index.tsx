import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTheme } from "../../hooks";
import { Container, ProgressContainer, Progress, Title, TitleContainer } from "./styles";

export interface ButtonSuggestionProps {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
  progress: string;
}
 
export const ButtonSuggestion: FunctionComponent<ButtonSuggestionProps> = ({ onPress, title, progress }) => {
  const [theme] = useTheme();
  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <FontAwesome5 name="book" size={38} color={theme.blueNeon} />
      <TitleContainer>
      <Title {...theme} numberOfLines={2}>{title}</Title>
      </TitleContainer>
      <ProgressContainer {...theme}>
        <Progress numberOfLines={2} {...theme}>{progress}%</Progress>
      </ProgressContainer>
    </Container>
  );
}
