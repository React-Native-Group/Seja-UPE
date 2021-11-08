import styled from "styled-components/native";

export type ContainerProps = {
  bgColor: string;
  width: string;
  maxWidth: string;
}

export type LabelProps = {
  color: string;
}

export const Container = styled.TouchableOpacity.attrs<ContainerProps>(props => props)<ContainerProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  padding: 4px;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;
