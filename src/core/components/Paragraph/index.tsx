import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import { useTheme } from "../../hooks";
import { Text } from "./styles";

export interface ParagraphProps {
  children: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  fontSize?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  justify?: boolean;
  bold?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({children, justify = false, style, ...props}) => {
  const [theme] = useTheme();

  return (
    <Text 
      style={style}
      justify={justify} 
      {...theme} 
      {...props}
    >
      {children}
    </Text>
  );
}
