import React, { FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Badge } from '../Badge';
import { useTheme } from '../../hooks';
import { AssetCapIcon } from '../../../assets';
import { Body, Container, Footer, Header, Icon, Progress, Title } from './styles';

export interface CardSuggestionProps {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
  progress: string;
}

export const CardSuggestion: FunctionComponent<CardSuggestionProps> = ({ title, progress, onPress }) => {
  const [theme] = useTheme();

  progress = progress.length > 3 ? progress.substring(0, 3) : progress;
  return (
    <Container {...theme} onPress={onPress ?? (() => {})} activeOpacity={0.7}>
      <Header {...theme}>
        <Title {...theme} numberOfLines={1}>{title}</Title>
      </Header>
      <Body>
        <Icon source={AssetCapIcon} />
        <Progress {...theme} numberOfLines={1}>{progress}%</Progress>
      </Body>
      <Footer>
        <Badge 
          text="Informações" 
          bold={true} 
          animated={false} 
          onPress={onPress ?? (() => {})}
        />
      </Footer>
    </Container>
  );
}
