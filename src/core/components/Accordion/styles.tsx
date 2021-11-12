import styled from "styled-components/native";

export type ContainerProps = {
  paddingBottom: number
}

export type HeaderProps = {
  borderBottomRadius: number
}

export const Container = styled.View.attrs<ContainerProps>(props => props)<ContainerProps>`
  elevation: 5;
  background-color: #fff;
  border-radius: 8px;
  padding-bottom: ${props => props.paddingBottom}px;
`;

export const Header = styled.TouchableOpacity.attrs<HeaderProps>(props => props)<HeaderProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${props => props.borderBottomRadius}px;
  border-bottom-right-radius: ${props => props.borderBottomRadius}px;
  background-color: #324A76;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Body = styled.ScrollView`
  height: 120px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
`;

export const Text = styled.Text`
  font-size: 14px;
  padding: 8px;
  color: #252525;
`;
