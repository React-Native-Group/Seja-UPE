import React, { Fragment, FunctionComponent } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Fab from 'react-native-fab';

import { Header } from '../Header';
import { Render } from '../Render';
import { useTheme } from '../../hooks';
import { AreaView, Container, ScrollableContainer } from './styles';

export interface PageLayoutProps {
  canScroll?: boolean;
  canGoBack?: boolean;
  showHeader?: boolean;
  showFab?: boolean;
  showTabs?: boolean;
  fabIcon?: keyof typeof FontAwesome.glyphMap;
  onFabClick?: () => void;
  onTabClick?: (e: 'suggestions' | 'search') => void;
  children: React.ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
  const [ theme ] = useTheme();

  const { canGoBack, canScroll, showHeader } = props;
  const { showFab, showTabs, fabIcon } = props;
  const { onFabClick, onTabClick, children } = props;
  
  return (
    <Fragment>
      <Render if={!!canScroll}>
        <ScrollableContainer nestedScrollEnabled>
          <Render if={!!showHeader}>
            <Header 
              canGoBack={!!canGoBack} 
              showTabs={showTabs} 
              onTabClick={onTabClick}
            />
          </Render>
          <AreaView>
            {children}
          </AreaView>
        </ScrollableContainer>
      </Render>
      <Render if={!canScroll}>
        <Container>
          <Render if={!!showHeader}>
            <Header 
              canGoBack={!!canGoBack} 
              showTabs={showTabs} 
              onTabClick={onTabClick}
            />
          </Render>
          <AreaView>
            {children}
          </AreaView>
        </Container>
      </Render>
      <Fab
        buttonColor={theme.white}
        iconTextColor={theme.blue}
        onClickAction={onFabClick ?? (() => {})}
        visible={!!showFab}
        iconTextComponent={<FontAwesome name={fabIcon ?? "comments"} size={24} />}
      />
    </Fragment>
  );
}
