import React, { Fragment, FunctionComponent } from 'react';

import { Header } from '../Header';
import { Render } from '../Render';
import { AreaView, Container, ScrollableContainer } from './styles';

export interface PageLayoutProps {
  canScroll?: boolean;
  showHeader?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ canGoBack, showHeader, canScroll, children }) => {
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
    </Fragment>
  );
}
