import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export type BoxProps = {
  paddingLeft: number;
  paddingRight: number;
}

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  z-index: 1;
  min-height: 96px;
  border-radius: 8px; 
  background-color: ${props => props.white};
  padding: 8px;
  elevation: 3;
`;

export const ArrowLeft = styled.Image`
  z-index: 3;
  position: absolute;
  width: 27px;
  height: 27px;
  left: -24px;
  top: 45%;
`;

export const ArrowRight = styled.Image`
  position: absolute;
  z-index: 3;
  width: 27px;
  height: 27px;
  right: -24px;
  top: 40%;
`;

export const Box = styled.View.attrs<BoxProps>(props => props)<BoxProps>`
  flex: 1;
  padding-left: ${props => props.paddingLeft}px;
  padding-right: ${props => props.paddingRight}px;
`;
