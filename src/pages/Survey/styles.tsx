import styled from "styled-components/native";
import { ThemeValue } from "../../core/providers";

export const RobotContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChoiceContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  border-radius: 8px;
  elevation: 3;
  padding: 16px;
  background-color: ${props => props.white};
  align-items: center;
`;

export const RadioContainer = styled.View`
  padding-right: 8px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ButtonSpacer = styled.View`
  width: 16px;
`;