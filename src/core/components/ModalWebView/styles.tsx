import styled from "styled-components/native";
import { ThemeValue } from "../../providers";
import { Feather } from "@expo/vector-icons";

export const Header = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props => props.white};
`;

export const HeaderDivider = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  background-color: ${props => props.blue};
  height: 4px;
  width: 32px;
  border-radius: 8px;
`;

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  background-color: rgba(0,0,0,0.8);
`;

export const ViewContainer = styled.View`
  flex: 1;
`;

export const CloseButton = styled(Feather)`
  position: absolute;
  left: 16px;
`;