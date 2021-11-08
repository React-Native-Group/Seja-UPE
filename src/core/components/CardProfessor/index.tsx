import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, ImageSourcePropType, View } from 'react-native';
import { Badge } from '../Badge';
import { AreaList, Biography, BiographyContainer, Body, Container, Header, InfoContainer, ItemView, Photo, PhotoContainer, Title } from './styles';

export interface CardProfessorProps {
  name: string;
  photo: ImageSourcePropType;
  shortbio: string;
  areas: string[];
  onPress?: (e: GestureResponderEvent) => void
}

export const CardProfessor: FunctionComponent<CardProfessorProps> = ({ name, photo, shortbio, areas, onPress }) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress || (() => {})}>
      <Header>
        <Title numberOfLines={1}>{name}</Title>
      </Header>
      <Body>
        <PhotoContainer>
          <Photo source={photo} />
        </PhotoContainer>
        <InfoContainer>
          <BiographyContainer>
            <Biography numberOfLines={3}>{shortbio}</Biography>
          </BiographyContainer>
          <AreaList
            data={areas}
            horizontal={true}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemView>
                <Badge 
                  text={String(item)} 
                  animated={false} 
                  bgColor="#C4C4C4" 
                  color="#000"
                />
              </ItemView>
            )}
          />
        </InfoContainer>
      </Body>
    </Container>
  );
}
