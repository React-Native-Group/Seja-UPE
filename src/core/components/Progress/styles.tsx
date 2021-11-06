import styled from "styled-components/native";

export type LabelProps = {
  color: string
}

export const Container = styled.View`
  height: 17px;
`;

export const Bar = styled.View`
  height: 100%;
  background-color: #324A76;
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  position: absolute;
  right: 12px;
  font-size: 12px;
  color: ${props => props.color};
`;