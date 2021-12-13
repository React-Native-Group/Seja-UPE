import React, { FunctionComponent, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Container } from "./styles";

export interface VerticalContentProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
 
export const VerticalContent: FunctionComponent<VerticalContentProps> = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  );
}
