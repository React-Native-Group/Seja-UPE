import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 8px;
  height: 110px;
  elevation: 3;
`;

export const Header = styled.View`
  background-color: #324A76;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 19px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const PhotoContainer = styled.View`
  border-radius: 60px;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export const Photo = styled.Image`
  border-radius: 60px;
  height: 60px;
  width: 60px;
`;

export const InfoContainer = styled.View`
  padding-left: 12px;
  padding-top: 12px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BiographyContainer = styled.View`
  flex: 4;
  padding-bottom: 6px;
`;

export const Biography = styled.Text`
  color: #000;
  font-size: 11px;
  text-align: justify;
  
`;

export const AreaList = styled.FlatList`
  flex: 3; 
`;

export const ItemView = styled.View`
  margin-right: 6px;
`;