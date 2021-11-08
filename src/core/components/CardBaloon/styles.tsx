import styled from "styled-components/native";

export type BoxProps = {
  paddingLeft: number;
  paddingRight: number;
}

export const Container = styled.View`
  z-index: 1;
  min-height: 96px;
  border-radius: 8px; 
  background-color: #fff;
  padding: 8px;
  elevation: 3;
`;

export const ArrowLeft = styled.Image`
  z-index: 3;
  position: absolute;
  width: 27px;
  height: 27px;
  left: -24px;
  top: 40%;
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
  padding-left: ${props => props.paddingLeft}px;
  padding-right: ${props => props.paddingRight}px;
`;
