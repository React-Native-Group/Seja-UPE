import React, { FunctionComponent } from 'react';
import { ImageSourcePropType } from 'react-native';
import { AssetWidgetSampleIcon } from '../../../assets';
import { Banner, BannerContainer, Container, Footer, FooterLabel } from './styles';

export interface CardCourseProps {
  banner?: ImageSourcePropType;
  text: string;
}

export const CardCourse: FunctionComponent<CardCourseProps> = ({ banner, text }) => {
  return (
    <Container>
      <BannerContainer>
        <Banner resizeMode="contain" source={banner ?? AssetWidgetSampleIcon} />
      </BannerContainer>
      <Footer>
        <FooterLabel>{text}</FooterLabel>
      </Footer>
    </Container>
  );
}
