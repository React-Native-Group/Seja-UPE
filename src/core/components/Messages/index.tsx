import React, { Fragment, FunctionComponent } from 'react';

import { Render } from '../Render';
import { Spacer } from '../Spacer';
import { useTheme } from '../../hooks';
import { Container, MessageContainer, MessageText, Photo, Username, ViewAlign } from './styles';

export interface MessageEnvelope {
  photo: string | null;
  username: string | null;
  text: string;
  isOwner: boolean;
}

export interface MessagesProps {
  messages: MessageEnvelope[];
}

export const Messages: FunctionComponent<MessagesProps> = ({ messages }) => {
  const [theme] = useTheme();

  return (
    <Container nestedScrollEnabled>

      {messages.map(({isOwner, ...message}) => (
        <Fragment key={String(Math.floor(Math.random() * 10**5))}>

          <Render if={!isOwner}>
            <Username>{message.username ?? ''}</Username>
          </Render>

          <ViewAlign {...theme} isOwner={isOwner}>

            <Render if={!isOwner}>
              <Photo resizeMode="cover" source={{ uri: message.photo ?? '' }} />
            </Render>

            <MessageContainer {...theme} isOwner={isOwner}>
              <MessageText {...theme} isOwner={isOwner}>{message.text}</MessageText>
            </MessageContainer>
            
          </ViewAlign>

        </Fragment>
      ))}

      <Spacer verticalSpace={16} />

    </Container>
  );
}
