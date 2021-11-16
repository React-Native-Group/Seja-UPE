import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import Ripple from 'react-native-material-ripple';
import { ThemeValue } from "../../providers";

export const Container = styled(Ripple).attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding-left: 16px;
  overflow: hidden;
  height: 73px;
  elevation: 3;
  background-color: ${props => props.white};
`;

export const Banner = styled.Image`
  height: 100%;
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