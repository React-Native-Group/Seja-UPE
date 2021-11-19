import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { AssetSocialFacebookIcon, AssetSocialInstagramIcon, AssetSocialTwitterIcon, AssetSocialYoutubeIcon, AssetWidgetSampleIcon } from '../../../assets';
import { Container, Icon, Text } from './styles';

export interface ButtonSocialProps {
  text: string;
  type: 'instagram' | 'twitter' | 'facebook' | 'youtube';
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonSocial: FunctionComponent<ButtonSocialProps> = ({ text, type, onPress }) => {
  const socialIcons = {
    'instagram': AssetSocialInstagramIcon,
    'twitter': AssetSocialTwitterIcon,
    'facebook': AssetSocialFacebookIcon,
    'youtube': AssetSocialYoutubeIcon
  }[type];
  
  return (
    <Container activeOpacity={0.7} onPress={onPress ?? (() => {})}>
      <Icon source={socialIcons ?? AssetWidgetSampleIcon} />
      <Text>{text}</Text>
    </Container>
  );
}
