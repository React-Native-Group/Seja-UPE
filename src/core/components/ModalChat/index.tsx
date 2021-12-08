import React, { FunctionComponent, useEffect, useState } from 'react';
import { Modal } from 'react-native';


import { Spacer } from '../Spacer';
import { Messages } from '../Messages';
import { useChatWebSocket, useSession, useTheme } from '../../hooks';

import {
  CloseButton,
  FooterContainer,
  Header,
  HeaderContainer,
  HeaderTitle,
  Input,
  InputContainer,
  ModalContainer,
  Photo,
  ViewContainer,
  SendIcon
} from './styles';
import { GoogleUser } from 'expo-google-app-auth';

export interface ModalChatProps {
  isOpen: boolean;
  onClose: () => void;
}

type ChatMessage = {
  userPhoto: string;
  userName: string;
  userEmail: string;
  text: string;
}

export const ModalChat: FunctionComponent<ModalChatProps> = ({ isOpen, onClose }) => {
  const [theme] = useTheme();
  
  const [session] = useSession();
  const [isVisible, setIsVisible] = useState(isOpen);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [user, setUser] = useState<GoogleUser>({});

  const [_, sendMessage, subscribe, unsubscribe] = useChatWebSocket<ChatMessage>();

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    let subscriptionId: number = subscribe(onMessageReceived);
    return () => {
      unsubscribe(subscriptionId);
    }
  }, []);

  useEffect(() => {
    if (!!session.user)
      setUser((session.user as GoogleUser));
  }, [session]);

  function closeModal(){
    setIsVisible(false);
    onClose();
  }

  function onSendClick() {
    sendMessage({
      userPhoto: user.photoUrl ?? '',
      userName: user.name ?? '',
      userEmail: user.email ?? '',
      text: inputValue
    });
    setInputValue("");
  }

  function onMessageReceived(message: ChatMessage){
    setMessages([...messages, {...message}]);
  }

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={isVisible}
    >
      <ModalContainer activeOpacity={1}>
        <ViewContainer {...theme}>
          <HeaderContainer>
            <Header {...theme}>
              <HeaderTitle {...theme}>
                Bate-papo
              </HeaderTitle>
            </Header>

            <CloseButton
              name="x"
              color={theme.blue}
              onPress={closeModal}
            />
          </HeaderContainer>
          
          <Spacer verticalSpace={8} />

          <Messages
            messages={
              messages.map((message: ChatMessage) => {
                return {
                  isOwner: message.userEmail.toLocaleLowerCase() === user.email?.toLocaleLowerCase(),
                  username: message.userName,
                  photo: message.userPhoto,
                  text: message.text
                }
              })
            }
          />

          <Spacer verticalSpace={8} />

          <FooterContainer>
            <Photo source={{ uri: user.photoUrl}} />

            <InputContainer {...theme}>
              <Input 
                placeholder="Digite algo..."
                selectionColor={theme.blue}
                value={inputValue} 
                onChangeText={setInputValue} 
                {...theme} 
              />
              
              <SendIcon 
                name="paper-plane" 
                size={18} 
                color={theme.blue}
                onPress={onSendClick}
              />

            </InputContainer>
          </FooterContainer>

        </ViewContainer>
      </ModalContainer>
    </Modal>
  );
}
