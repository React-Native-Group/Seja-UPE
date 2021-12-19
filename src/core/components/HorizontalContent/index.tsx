import React, { FunctionComponent, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Container } from "./styles";

export interface HorizontalContentProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
 
export const HorizontalContent: FunctionComponent<HorizontalContentProps> = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  );
}
