import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.white};
  elevation: 3;
`;

export const Label = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 38px;
  padding-left: 16px;
  color: ${props => props.blue};
`;