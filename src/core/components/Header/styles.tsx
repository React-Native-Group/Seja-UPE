import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";

export type TabProps = {
  isActive: boolean;
}

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

export const TabsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  elevation: 5;
  background-color: #fff;
`;

export const Tab = styled(Ripple).attrs<TabProps>(props => props)<TabProps>`
  flex: 1;
  height: 51px;
  justify-content: center;
  align-items: center;
  border-color: #324A76;
  ${({ isActive }) => isActive ? 'border-bottom-width: 4px;' : ''}
`;

export const Stack = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TabText = styled.Text`
  color: #324A76;
  font-size: 16px;
`;