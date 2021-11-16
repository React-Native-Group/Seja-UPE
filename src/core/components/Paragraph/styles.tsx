import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface TextProps extends ThemeValue {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const Text = styled.Text.attrs<TextProps>(props => props)<TextProps>`
  font-size: 14px;
  color: ${props => props.blue};
  padding-left: ${props => props.paddingLeft ?? '0'};
  padding-right: ${props => props.paddingRight ?? '0'};
  padding-top: ${props => props.paddingTop ?? '0'};
  padding-bottom: ${props => props.paddingBottom ?? '0'};
`;