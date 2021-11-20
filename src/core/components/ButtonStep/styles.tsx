import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Label = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 24px;
  padding-right: 8px;
  color: ${props => props.blue};
`;