import styled from "styled-components/native";
import { ThemeValue } from "../../core/providers";

export const RobotContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RobotContainerRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const SurveyButtonContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderTitle = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  color: ${props => props.black};
`;

export const SearchButtonSpacer = styled.View`
  width: 20%;
`;