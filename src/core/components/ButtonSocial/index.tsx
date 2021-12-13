import React, { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";

import { useTheme } from "../../hooks";
import { Container, Icon, Text } from "./styles";
import {
  AssetSocialFacebookIcon,
  AssetSocialInstagramIcon,
  AssetSocialTwitterIcon,
  AssetSocialYoutubeIcon,
  AssetWidgetSampleIcon
} from "../../../assets";

export interface ButtonSocialProps {
  text: string;
  type: "instagram" | "twitter" | "facebook" | "youtube";
  onPress?: (e: GestureResponderEvent) => void;
}

export const ButtonSocial: FunctionComponent<ButtonSocialProps> = ({ text, type, onPress }) => {
  const [theme] = useTheme();
  
  const socialIcons = {
    "instagram": AssetSocialInstagramIcon,
    "twitter": AssetSocialTwitterIcon,
    "facebook": AssetSocialFacebookIcon,
    "youtube": AssetSocialYoutubeIcon
  }[type];
  
  return (
    <Container activeOpacity={0.7} onPress={onPress ?? (() => {})}>
      <Icon source={socialIcons ?? AssetWidgetSampleIcon} />
      <Text {...theme}>{text}</Text>
    </Container>
  );
}
