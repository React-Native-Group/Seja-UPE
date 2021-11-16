import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  height: 49px;
  background-color: ${props => props.blue};
  border-radius: 8px;
  align-items: center;
`;

export const Banner = styled.Image`
  height: 40px;
  width: 40px;
  margin-left: 16px;
`;

export const Title = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.white};
  margin-left: 48px;
`;