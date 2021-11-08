import styled from "styled-components/native";

export const Box = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 107px;
`;

export const Container = styled.View`
  height: 107px;
  width: 107px;
  background-color: #324A76;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.Text`
  font-size: 14px;
  padding-top: 12px;
  color: #ED3237;
`;

export const Banner = styled.Image`
  width: 88px;
  height: 88px;
`;