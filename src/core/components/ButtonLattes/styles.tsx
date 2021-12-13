import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";
import { ThemeValue } from "../../providers";

export const Container = styled(Ripple).attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  background-color: ${props => props.blue};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  padding: 4px;
  height: 94px;
  elevation: 5;
`;

export const Logo = styled.Image`
  height: 75%;
`;