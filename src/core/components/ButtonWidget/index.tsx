import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
import { AssetWidgetSampleIcon } from '../../../assets';
import { Banner, Box, Container, Legend } from './styles';
import Ripple from 'react-native-material-ripple';

export interface ButtonWidgetProps {
  legend: string;
  banner?: ImageSourcePropType;
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonWidget: FunctionComponent<ButtonWidgetProps> = ({ legend, banner, onPress }) => {
  return (
    <Box activeOpacity={0.7} onPress={onPress ?? (() => {})}>
      <Ripple onPress={onPress ?? (() => {})}>
        <Container>
          <Banner resizeMode="contain" source={banner ?? AssetWidgetSampleIcon} />
        </Container>
      </Ripple>
      <Legend numberOfLines={2}>{legend}</Legend>
    </Box>
  );
}
