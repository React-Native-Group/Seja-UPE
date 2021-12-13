import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';
import { ThemeValue } from "../../providers";

export interface ContainerProps extends ThemeValue {
  paddingBottom: number
}

export interface HeaderProps extends ThemeValue {
  borderBottomRadius: number
}

export interface TitleProps extends ThemeValue {
  bold: boolean;
}

export const Container = styled.View.attrs<ContainerProps>(props => props)<ContainerProps>`
  flex: 1;
  elevation: 5;
  background-color: ${props => props.white};
  border-radius: 8px;
  padding-bottom: ${props => props.paddingBottom}px;
`;

export const Header = styled(Ripple).attrs<HeaderProps>(props => props)<HeaderProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${props => props.borderBottomRadius}px;
  border-bottom-right-radius: ${props => props.borderBottomRadius}px;
  background-color: ${props => props.blue};
`;

export const Title = styled.Text.attrs<TitleProps>(props => props)<TitleProps>`
  font-size: 16px;
  color: #e3e3e3;
  ${props => props.bold ? 'font-weight: bold;' : ''}
`;

export const Body = styled.ScrollView.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 120px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => props.white};
`;

export const Text = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${props => props.black};
`;
