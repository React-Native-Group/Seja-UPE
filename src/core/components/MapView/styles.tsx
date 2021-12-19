import styled from "styled-components/native";
import Map from "react-native-maps";

export type ContainerProps = {
  width: string;
  height: string;
}

export const Container = styled.View.attrs<ContainerProps>(props => props)<ContainerProps>`
  flex: 1;
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const MapContainer = styled(Map)`
  flex: 1;
`;
