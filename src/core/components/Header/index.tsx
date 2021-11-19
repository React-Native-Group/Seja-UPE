import React, { FunctionComponent, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { BackHandler } from 'react-native';

import { Render } from '../Render';
import { AssetHeaderLogo } from '../../../assets';
import { BackButton, Container, Logo, Stack, Tab, TabsContainer, TabText } from './styles';
import { useTheme } from '../../hooks';

export interface HeaderProps {
  canGoBack?: boolean;
  showTabs?: boolean;
  onTabClick?: (e: 'suggestions' | 'search') => void;
}

export const Header: FunctionComponent<HeaderProps> = ({ canGoBack, showTabs, onTabClick }) => {
  const [theme] = useTheme();
  const navigation = useNavigation();
  const [tabIndex, setTabIndex] = useState(0);

  function goBack(){
    if (navigation.canGoBack())
      return navigation.goBack();
    BackHandler.exitApp();
  }

  function changeTabs(index: number){
    if (!!onTabClick)
      onTabClick(index == 0 ? 'search' : 'suggestions');
    setTabIndex(index++ % 2);
  }

  return (
    <Stack>

      <Container {...theme}>
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

      <Render if={!!showTabs}>
        <TabsContainer {...theme}>
          <Tab {...theme} isActive={tabIndex == 0} onPress={() => changeTabs(0)}>
            <TabText {...theme} numberOfLines={1}>Já sei o que quero</TabText>
          </Tab>
          <Tab {...theme} isActive={tabIndex == 1} onPress={() => changeTabs(1)}>
            <TabText {...theme} numberOfLines={1}>Não sei o que quero</TabText>
          </Tab>
        </TabsContainer>
      </Render>

    </Stack>
  );
}
