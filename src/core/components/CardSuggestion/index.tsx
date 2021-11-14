import React, { FunctionComponent } from 'react';

import { Badge } from '../Badge';
import { AssetCapIcon } from '../../../assets';
import { Body, Container, Footer, Header, Icon, Progress, Title } from './styles';
import { GestureResponderEvent } from 'react-native';

export interface CardSuggestionProps {
  onPress?: (e: GestureResponderEvent) => void;
  title: string;
  progress: string;
}

export const CardSuggestion: FunctionComponent<CardSuggestionProps> = ({ title, progress, onPress }) => {
  progress = progress.length > 3 ? progress.substring(0, 3) : progress;
  return (
    <Container activeOpacity={0.7}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Icon source={AssetCapIcon} />
        <Progress numberOfLines={1}>{progress}%</Progress>
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
