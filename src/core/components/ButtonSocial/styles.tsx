import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 48px;
  height: 48px;
`;

export const Text = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  padding-left: 16px;
  font-size: 18px;
  color: ${props => props.black};
`;
