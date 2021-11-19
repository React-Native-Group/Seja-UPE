import styled from "styled-components/native";
import { ThemeValue } from "../../core/providers";

export const WebViewContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  border-width: 2px;
  border-color: ${props => props.blue};
`;