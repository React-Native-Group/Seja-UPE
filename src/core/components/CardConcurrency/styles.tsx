import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  elevation: 4;
  height: 79px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Note = styled.Text`
  font-size: 36px;
  color: #324A76;
`;

export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;