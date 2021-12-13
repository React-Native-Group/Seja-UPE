import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.TouchableOpacity.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 149px;
  width: 261px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.white};
  elevation: 5;
`;

export const Header = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 37px;
  padding-left: 24px;  
  padding-right: 16px;
  justify-content: center;
  background-color: ${props => props.blue};
  elevation: 3;
`;

export const Title = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 18px;
  color: #e3e3e3;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  overflow: hidden;
`;

export const Icon = styled.Image`
  height: 86px;
  width: 86px;
`;

export const Progress = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 48px;
  color: ${props => props.blue};
`;

export const Footer = styled.View`
  margin-top: auto;
  padding-right: 32px;
  padding-left: 32px;
  height: 32px;
`;
