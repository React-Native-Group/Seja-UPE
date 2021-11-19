import styled from "styled-components/native";

import { ThemeValue } from "../../providers";

export interface ImageProps extends ThemeValue {
  diameter: number;
}

export const Container = styled.View.attrs<ImageProps>(props => props)<ImageProps>`
  background-color: ${props => props.white};
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  border-radius: ${props => props.diameter}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  elevation: 5;
`;

export const Image = styled.Image.attrs<ImageProps>(props => props)<ImageProps>`
  border-radius: ${props => props.diameter}px;
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
`;