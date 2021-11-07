import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding-left: 16px;
  height: 73px;
  elevation: 3;
  background-color: #fff;
`;

export const Banner = styled.Image`
  height: 100%;
`;

export const Title = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;  
  font-weight: bold;
  color: #324A76;
  max-width: 80%;
`;

export const Icon = styled(FontAwesome5)`
  position: absolute;
  right: 20px;
`;