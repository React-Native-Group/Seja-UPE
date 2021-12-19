import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";
import { ThemeValue } from "../../providers";

export interface TabProps extends ThemeValue {
  isActive: boolean;
}

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  height: 51px;
  max-height: 51px;
  elevation: 5;
  background-color: ${props => props.white};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 70%;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ThemeSwitch = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TabsContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  elevation: 5;
  background-color: ${props => props.white};
`;

export const Tab = styled(Ripple).attrs<TabProps>(props => props)<TabProps>`
  flex: 1;
  height: 51px;
  max-height: 51px;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.blue};
  ${({ isActive }) => isActive ? "border-bottom-width: 4px;" : ""}
`;

export const Stack = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TabText = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  color: ${props => props.blue};
  font-size: 16px;
`;