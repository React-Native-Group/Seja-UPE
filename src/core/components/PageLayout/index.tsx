import React, { Fragment, FunctionComponent } from 'react';
import { ActivityIndicator, BackHandler, Dimensions  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Fab from 'react-native-fab';

import { Header } from '../Header';
import { Render } from '../Render';
import { useEnterScreen, useTheme } from '../../hooks';
import { AreaView, Center, ScrollableContainer } from './styles';

export interface PageLayoutProps {
  canGoBack?: boolean;
  showHeader?: boolean;
  showFab?: boolean;
  showTabs?: boolean;
  showSpinner?: boolean;
  fabIcon?: keyof typeof FontAwesome.glyphMap;
  onFabClick?: () => void;
  onTabClick?: (e: 'suggestions' | 'search') => void;
  onBackPressed?: () => boolean;
  children: React.ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
  const [ theme ] = useTheme();

  const { onFabClick, onTabClick, onBackPressed } = props;
  const { showFab, showTabs, fabIcon, showSpinner } = props;
  const { showHeader, canGoBack, children } = props;

  const { height } = Dimensions.get('window');

  function getPageHeight(){
    if (!!showHeader)
      return height - (Constants.statusBarHeight + (!!showTabs ? 102 : 51));
    return height;
  }

  useEnterScreen(() => {
    function backButtonHandler() {
      return !canGoBack;
    }
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    return () => BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
  });

  return (
    <Fragment>

      <Render if={!!showSpinner}>
        <ScrollableContainer nestedScrollEnabled>
          <Render if={!!showHeader}>
            <Header
              canGoBack={!!canGoBack}
              showTabs={showTabs}
              onTabClick={onTabClick}
              onBackPressed={onBackPressed}
            />
          </Render>
          <Center style={{ height: getPageHeight() }}>
            <ActivityIndicator color={theme.red} size={48} />
          </Center>
        </ScrollableContainer>
      </Render>

      <Render if={!showSpinner}>
        <ScrollableContainer nestedScrollEnabled>
          <Render if={!!showHeader}>
            <Header
              canGoBack={!!canGoBack}
              showTabs={showTabs}
              onTabClick={onTabClick}
              onBackPressed={onBackPressed}
            />
          </Render>

          <AreaView>
            {children}
          </AreaView>
        </ScrollableContainer>
      </Render>

      <Render if={!showSpinner}>
        <Fab
          buttonColor={theme.white}
          iconTextColor={theme.blue}
          onClickAction={onFabClick ?? (() => {})}
          visible={!!showFab}
          iconTextComponent={<FontAwesome name={fabIcon ?? "comments"} size={24} />}
        />
      </Render>

    </Fragment>
  );
}
