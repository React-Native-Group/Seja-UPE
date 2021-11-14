import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';

export const Container = styled(Ripple)`
  flex: 1;
  background-color: #324A76;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 4px;
  height: 94px;
  elevation: 5;
`;

export const Logo = styled.Image`
  height: 75%;
`;