import React, { FunctionComponent } from 'react';
import { ImageSourcePropType } from 'react-native';
import { AssetWidgetSampleIcon } from '../../../assets';
import { useTheme } from '../../hooks';
import { Banner, BannerContainer, Container, Footer, FooterLabel } from './styles';

export interface CardCourseProps {
  banner?: ImageSourcePropType;
  text: string;
}

export const CardCourse: FunctionComponent<CardCourseProps> = ({ banner, text }) => {
  const [theme] = useTheme();

  return (
    <Container {...theme}>
      <BannerContainer>
        <Banner resizeMode="contain" source={banner ?? AssetWidgetSampleIcon} />
      </BannerContainer>
      <Footer {...theme}>
        <FooterLabel {...theme}>{text}</FooterLabel>
      </Footer>
    </Container>
  );
}
