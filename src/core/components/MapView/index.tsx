import React, { FunctionComponent } from 'react';
import { Dimensions, ImageRequireSource, ImageURISource } from 'react-native';
import { LatLng, Marker, Region } from 'react-native-maps';
import { AssetMarkerIcon } from '../../../assets';
import { MapStyle } from './custom';
import { Container, MapContainer } from './styles';

export interface PointsProp {
  coords: LatLng;
  title: string;
  description: string;
} 

export interface MapViewProps {
  height?: string;
  width?: string;
  points: PointsProp[];
  region: Region;
  image?: ImageURISource | ImageRequireSource;
}

export const MapView: FunctionComponent<MapViewProps> = ({ width, height, points, image, region }) => {
  
  return (
    <Container width={width || '100%'} height={height || '100%'}>
      <MapContainer region={region} customMapStyle={MapStyle}>
        {points.map(({ title, description, coords }) => (
          <Marker
            key={String(Math.floor(Math.random() * 10**6))} 
            title={title} 
            description={description} 
            coordinate={coords}
            image={AssetMarkerIcon}
          />
        ))}
      </MapContainer>
    </Container>
  );
}
