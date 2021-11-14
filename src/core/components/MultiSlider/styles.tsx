import styled from "styled-components/native";

export type LabelProps = {
  offset?: number;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Label = styled.Text.attrs<LabelProps>(props => props)<LabelProps>`
  color: #324A76;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  ${props => !!props.offset ? `left: ${props.offset}px;` : ''}
`;

export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  height: 24px;
`;