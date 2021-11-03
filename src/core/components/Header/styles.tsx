import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 51px;
  elevation: 5;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 70%;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;