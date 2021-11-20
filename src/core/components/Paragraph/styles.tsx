import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface TextProps extends ThemeValue {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  fontSize?: string;
  justify: boolean;
}

export const Text = styled.Text.attrs<TextProps>(props => props)<TextProps>`
  flex: 1;
  color: ${props => props.blue};
  padding-left: ${props => props.paddingLeft ?? '0'};
  padding-right: ${props => props.paddingRight ?? '0'};
  padding-top: ${props => props.paddingTop ?? '0'};
  padding-bottom: ${props => props.paddingBottom ?? '0'};
  font-size: ${props => props.fontSize ?? '14px'};
  ${props => props.justify ? 'text-align: justify;' : ''}
`;