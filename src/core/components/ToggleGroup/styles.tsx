import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";
import { ThemeValue } from "../../providers";

export interface ToggleProps extends ThemeValue {
  isActive: boolean;
}

export interface LabelProps extends ThemeValue {
  isActive: boolean;
}

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${props => props.gray};
  background-color: ${props => props.white};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-around;
`;

export const Toggle = styled(Ripple).attrs<ToggleProps>(props => props)<ToggleProps>`
  flex: 1;
  border-radius: 8px;
  height: 36px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isActive ? props.blue : 'transparent'};
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  font-size: 18px;
  color: ${props => props.isActive ? props.white : props.blue};
`;