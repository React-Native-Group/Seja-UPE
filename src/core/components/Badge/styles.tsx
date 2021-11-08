import styled from "styled-components/native";

export type ContainerProps = {
  bgColor: string;
  width: string;
  maxWidth: string;
  hasShadow: boolean;
}

export type LabelProps = {
  color: string;
  fontSize: string;
  bold: boolean;
}

export const Container = styled.TouchableOpacity.attrs<ContainerProps>(props => props)<ContainerProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  ${props => props.hasShadow ? 'elevation: 3;' : ''}
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  text-align: center;
  ${props => props.bold ? 'font-weight: bold;' : ''} 
`;
