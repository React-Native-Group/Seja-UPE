import styled from "styled-components/native";
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

export const Title = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  padding-left: 16px;
  padding-right: 32px;
  font-size: 18px;  
  font-weight: bold;
  flex-wrap: wrap;
  flex: 1;
  color: ${props => props.blue};
  max-width: 80%;
`;

export const ProgressContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex-direction: row;
  background-color: ${props => props.blue};
  border-radius: 4px;
  padding: 4px;
  margin-left: auto;
  margin-right: 16px;
`;

export const Progress = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.white};
`;