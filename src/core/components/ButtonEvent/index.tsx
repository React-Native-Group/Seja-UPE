import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTheme } from "../../hooks";
import { Container, Icon, Title } from "./styles";

export interface ButtonEventProps {
  onPress?: (e: GestureResponderEvent) => void,
  title: string
}

export const ButtonEvent: FunctionComponent<ButtonEventProps> = ({ onPress, title }) => {
  const [theme] = useTheme();
  
  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <FontAwesome name="star" size={38} color={theme.yellow} />
      <Title {...theme} numberOfLines={1}>{title}</Title>
      <Icon name="link" size={20} color={theme.gray} />
    </Container>
  );
}
