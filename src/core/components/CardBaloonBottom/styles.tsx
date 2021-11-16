import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  z-index: 1;
  min-height: 96px;
  border-radius: 8px; 
  background-color: ${props => props.white};
  padding: 8px;
  elevation: 3;
`;

export const ArrowTop = styled.Image`
  z-index: 3;
  position: absolute;
  width: 27px;
  height: 27px;
  top: -27px;
  left: 25%;
`;

export const Box = styled.View`
  padding-top: 27px;
`;