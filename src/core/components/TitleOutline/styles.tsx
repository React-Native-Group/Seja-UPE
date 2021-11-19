import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface TitleProps extends ThemeValue {
  bold: boolean;
}

export const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;

export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  padding-bottom: 4px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  height: 57px;
  width: 57px;
  margin-right: 8px; 
`;

export const Title = styled.Text.attrs<TitleProps>(props => props)<TitleProps>`
  flex: 1;
  align-self: flex-end;
  width: 100%;
  font-size: 24px;
  ${props => props.bold ? 'font-weight: bold;' : ''}
  color: ${props => props.blue};
`;

export const Divider = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  height: 5px;
  width: 32%;
  background-color: ${props => props.red};
`;