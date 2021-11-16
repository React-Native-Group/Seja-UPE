import styled from "styled-components/native";

export type TextProps = {
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const Text = styled.Text.attrs<TextProps>(props => props)<TextProps>`
  font-size: 14px;
  color: #324A76;
  padding-left: ${props => props.paddingLeft ?? '0'};
  padding-right: ${props => props.paddingRight ?? '0'};
  padding-top: ${props => props.paddingTop ?? '0'};
  padding-bottom: ${props => props.paddingBottom ?? '0'};
`;