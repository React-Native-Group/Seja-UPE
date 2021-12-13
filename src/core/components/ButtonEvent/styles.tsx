import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
import { ThemeValue } from "../../providers";

export const Container = styled(Ripple).attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  padding-left: 16px;
  height: 73px;
  elevation: 3;
  overflow: hidden;
  background-color: ${props => props.white};
`;

export const Title = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;  
  font-weight: bold;
  color: ${props => props.blue};
  max-width: 80%;
`;

export const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 20px;
`;