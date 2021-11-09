import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  overflow: hidden;
`;

export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
`;

export const Banner = styled.Image`
  height: 57px;
  width: 57px;
  margin-right: 8px; 
`;

export const Title = styled.Text`
  flex: 1;
  align-self: flex-end;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 2px;
  color: #324A76;
`;

export const Divider = styled.View`
  height: 5px;
  width: 32%;
  background-color: #ED3237;
`;