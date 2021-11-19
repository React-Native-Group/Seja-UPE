import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Box = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 128px;
`;

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 107px;
  width: 107px;
  background-color: ${props => props.blue};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 14px;
  padding-top: 12px;
  height: 48px;
  text-align: center;
  color: ${props => props.red};
`;

export const Banner = styled.Image`
  width: 88px;
  height: 88px;
`;