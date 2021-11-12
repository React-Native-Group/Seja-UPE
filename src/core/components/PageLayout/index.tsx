import React, { Fragment, FunctionComponent } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Fab from 'react-native-fab';

import { Header } from '../Header';
import { Render } from '../Render';
import { AreaView, Container, ScrollableContainer } from './styles';

export interface PageLayoutProps {
  canScroll?: boolean;
  canGoBack?: boolean;
  showHeader?: boolean;
  showFab?: boolean;
  onFabClick?: () => void;
  children: React.ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ canGoBack, canScroll, showHeader, showFab, onFabClick, children }) => {
  return (
    <Fragment>
      <Render if={!!canScroll}>
        <ScrollableContainer>
          <Render if={!!showHeader}>
            <Header canGoBack={!!canGoBack} />
          </Render>
          <AreaView>
            {children}
          </AreaView>
        </ScrollableContainer>
      </Render>
      <Render if={!canScroll}>
        <Container>
          <Render if={!!showHeader}>
            <Header canGoBack={!!canGoBack} />
          </Render>
          <AreaView>
            {children}
          </AreaView>
        </Container>
      </Render>
      <Fab
        buttonColor="#fff"
        iconTextColor="#324A76"
        onClickAction={onFabClick || (() => {})}
        visible={!!showFab}
        iconTextComponent={<FontAwesome name="comments" size={24} />}
      />
    </Fragment>
  );
}
