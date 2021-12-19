import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { AssetLattesWhiteLogo } from "../../../assets";
import { useTheme } from "../../hooks";
import { Container, Logo } from "./styles";

export interface ButtonLattesProps {
  onPress?: (e: GestureResponderEvent) => void
}

export const ButtonLattes: FunctionComponent<ButtonLattesProps> = ({ onPress }) => {
  const [theme] = useTheme();
  
  return (
    <Container {...theme} onPress={onPress ?? (() => {})}>
      <Logo resizeMode="contain" source={AssetLattesWhiteLogo} />
    </Container>
  );
}
