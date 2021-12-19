import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  elevation: 4;
  height: 79px;
  background-color: ${props => props.white};
  border-radius: 8px;
`;

export const Note = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 34px;
  color: ${props => props.blue};
`;

export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;