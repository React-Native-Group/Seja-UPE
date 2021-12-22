import React, { Fragment, FunctionComponent, useRef } from "react";
import { ScrollView } from "react-native";

import { Render } from "../Render";
import { Spacer } from "../Spacer";
import { useTheme } from "../../hooks";
import { Container, MessageContainer, MessageText, Photo, Username, ViewAlign } from "./styles";

export interface MessageEnvelope {
  photo: string | null;
  username: string | null;
  text: string;
  email: string;
  isOwner: boolean;
}

export interface MessagesProps {
  messages: MessageEnvelope[];
}

export const Messages: FunctionComponent<MessagesProps> = ({ messages }) => {
  const [theme] = useTheme();
  const containerRef = useRef<ScrollView | null>(null);

  function isSameOwner(message: MessageEnvelope, index: number, array: MessageEnvelope[]){
    return message.email != (index <= 0 ? "" : array[index-1].email);
  }

  return (
    <Container 
      nestedScrollEnabled 
      ref={(ref) => { containerRef.current = ref }}
      onContentSizeChange={() => containerRef.current?.scrollToEnd({ animated: true })}
    >

      {messages.map(({isOwner, ...message}, index: number, array: MessageEnvelope[]) => (
        <Fragment key={String(Math.floor(Math.random() * 10**5))}>

          <Render if={!isOwner && isSameOwner({isOwner, ...message}, index, array)}>
            <Username {...theme}>{message.username ?? ""}</Username>
          </Render>

          <ViewAlign {...theme} isOwner={isOwner}>

            <Render if={!isOwner}>
              <Photo 
                resizeMode="cover" 
                source={{ uri: isSameOwner({isOwner, ...message}, index, array) ? (message.photo ?? undefined) : undefined}} 
              />
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
