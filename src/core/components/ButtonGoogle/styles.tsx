import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';
import { ThemeValue } from "../../providers";

export const Container = styled(Ripple).attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 3;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.white};
  border-radius: 8px;
`;

export const Label = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 20px;
  margin-left: 8px;
  color: ${props => props.blue};
`;

export const Logo = styled.Image`
  width: 23px;
  height: 23px;
`;