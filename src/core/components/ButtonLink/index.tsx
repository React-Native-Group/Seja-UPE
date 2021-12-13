import React, { FunctionComponent } from "react";
import { Container, Text } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "../../hooks";

export interface ButtonLinkProps {
  iconName: string;
  iconColor?: string;
  textColor?: string;
  text: string;
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ iconName, iconColor, textColor, text, onPress }) => {
  const [theme] = useTheme();
  
  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <FontAwesome5 name={iconName} size={24} color={iconColor ?? theme.black} />
      <Text numberOfLines={1} textColor={textColor ?? theme.black}>{text}</Text>
    </Container>
  );
}
