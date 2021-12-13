import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface TextProps extends ThemeValue {
  align: "center" | "left" | "right" | "justify";
} 

export const Container = styled.View`
  justify-content: center;
  padding-bottom: 16px;
`;

export const Text = styled.Text.attrs<TextProps>(props => props)<TextProps>`
  font-size: 30px;
  font-weight: bold;
  text-align: ${props => props.align};
  color: ${props => props.blue};
`;