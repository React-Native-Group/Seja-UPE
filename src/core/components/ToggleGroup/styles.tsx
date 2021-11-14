import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";

export type ToggleProps = {
  isActive: boolean;
}

export type LabelProps = {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  border-width: 1px;
  border-radius: 8px;
  border-color: #C4C4C4;
  background-color: #fff;
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
  background-color: ${props => props.isActive ? '#324A76' : 'transparent'};
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  font-size: 18px;
  color: ${props => props.isActive ? '#fff' : '#324A76'};
`;