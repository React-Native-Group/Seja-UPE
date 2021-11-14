import styled from "styled-components/native";
import Ripple from 'react-native-material-ripple';

export const Container = styled(Ripple)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 3;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Label = styled.Text`
  font-size: 20px;
  margin-left: 8px;
  color: #324A76;
`;

export const Logo = styled.Image``;