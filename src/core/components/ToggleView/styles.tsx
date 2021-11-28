import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';
import { ThemeValue } from "../../providers";

export const Container = styled(Ripple).attrs<ThemeValue>(props => props)<ThemeValue>`
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.blue};
`;
