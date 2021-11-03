import React, { Fragment, FunctionComponent, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { BackHandler } from 'react-native';

import { AssetHeaderLogo } from '../../../assets';
import { BackButton, Container, Logo } from './styles';
import { Render } from '../Render';

export interface HeaderProps {
  canGoBack?: boolean
}

export const Header: FunctionComponent<HeaderProps> = ({ canGoBack }) => {
  const navigation = useNavigation();

  function goBack(){
    if (navigation.canGoBack())
      return navigation.goBack();
    BackHandler.exitApp();
  }

  return (
    <Fragment>
      <Container>
        <Render if={!!canGoBack}>
          <BackButton activeOpacity={0.7} onPress={goBack}>
            <FontAwesome5 name="arrow-left" size={24} color="#324A76" />
          </BackButton>
        </Render>

        <Logo 
          resizeMode="contain" 
          source={AssetHeaderLogo}
        />
      </Container>
    </Fragment>
  );
}
