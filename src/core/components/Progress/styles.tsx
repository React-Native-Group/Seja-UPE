import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface LabelProps {
  color: string
}

export const Container = styled.View`
  height: 17px;
`;

export const Bar = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 100%;
  background-color: ${props => props.blue};
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  position: absolute;
  right: 12px;
  font-size: 12px;
  color: ${props => props.color};
`;