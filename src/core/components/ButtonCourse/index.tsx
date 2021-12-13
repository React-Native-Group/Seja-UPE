import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTheme } from "../../hooks";
import { Container, Icon, Title, TitleContainer } from "./styles";

export interface ButtonCourseProps {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
}

export const ButtonCourse: FunctionComponent<ButtonCourseProps> = ({ onPress, title }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <FontAwesome5 name="book" size={38} color={theme.blueNeon} />
      <TitleContainer>
        <Title {...theme} numberOfLines={2}>{title}</Title>
      </TitleContainer>
      <Icon name="link" size={20} color={theme.gray} />
    </Container>
  );
}
