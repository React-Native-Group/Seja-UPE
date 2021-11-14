import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';

export type TextProps = {
  textColor: string;
} 

export const Container = styled(Ripple)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  height: 32px;
  elevation: 2;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
`;

export const Text = styled.Text.attrs<TextProps>(props => props)<TextProps>`
  font-size: 11px;
  font-weight: bold;
  padding-left: 8px; 
  padding-right: 8px;
  color: ${props => props.textColor};
`;