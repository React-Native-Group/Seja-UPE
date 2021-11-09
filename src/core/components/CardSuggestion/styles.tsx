import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 149px;
  width: 261px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  elevation: 5;
`;

export const Header = styled.View`
  height: 37px;
  padding-left: 24px;  
  padding-right: 16px;
  justify-content: center;
  background-color: #324A76;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  overflow: hidden;
`;

export const Icon = styled.Image`
  height: 86px;
  width: 86px;
`;

export const Progress = styled.Text`
  font-size: 48px;
  color: #324A76;
`;

export const Footer = styled.View`
  margin-top: auto;
  padding-right: 32px;
  padding-left: 32px;
  height: 32px;
`;