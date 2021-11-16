import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.TouchableOpacity.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${props => props.blue};
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background-color: ${props => props.blue};
`;