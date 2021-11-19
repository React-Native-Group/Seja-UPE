import styled from "styled-components/native";
import { ThemeValue } from "../../core/providers";

export const AvatarRow = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${props => props.blue};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  elevation: 3;
`;

export const NameText = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 20px;
  text-align: center;
  color: ${props => props.white};
`;

export const BadgeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-right: 8px;
`;