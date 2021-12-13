import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";
import { ThemeValue } from "../../providers";

export interface ContainerProps extends ThemeValue {
  bgColor: keyof ThemeValue;
}

export interface LabelProps {
  color: string;
}

export const Container = styled(Ripple).attrs<ContainerProps>(props => props)<ContainerProps>`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  elevation: 1;
  background-color: ${props => props[props.bgColor]};
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  font-size: 16px;
  text-align: center;
  color: ${props => props.color};
`;