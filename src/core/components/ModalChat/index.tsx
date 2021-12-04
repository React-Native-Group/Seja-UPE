import React, { FunctionComponent, useEffect, useState } from 'react';
import { Modal } from 'react-native';


import { Spacer } from '../Spacer';
import { Messages } from '../Messages';
import { useTheme } from '../../hooks';

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

export interface ModalChatProps {
  isOpen: boolean;
}

export const ModalChat: FunctionComponent<ModalChatProps> = ({ isOpen }) => {
  const [theme] = useTheme();
  const [isVisible, setIsVisible] = useState(isOpen);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  function closeModal(){
    setIsVisible(false);
  }

  function onSendClick(){
    console.log(inputValue)
    setInputValue("");
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
            messages={[
              {
                isOwner: false,
                username: "Luana Nóbrega",
                photo: "https://i1.rgstatic.net/ii/profile.image/595851827228672-1519073554654_Q512/Ariane-Cardoso-3.jpg",
                text: "oi, como vai vc?"
              },
              {
                isOwner: true,
                username: null,
                photo: null,
                text: "bem, e vc?"
              },
              {
                isOwner: false,
                username: "Luana Nóbrega",
                photo: "https://i1.rgstatic.net/ii/profile.image/595851827228672-1519073554654_Q512/Ariane-Cardoso-3.jpg",
                text: "estou bem, também!"
              },
              {
                isOwner: true,
                username: null,
                photo: null,
                text: "que bom!! gostei do aplicativo, muito legal..."
              },
            ]}
          />

          <Spacer verticalSpace={8} />

          <FooterContainer>
            <Photo source={{ uri: 'https://i1.rgstatic.net/ii/profile.image/595851827228672-1519073554654_Q512/Ariane-Cardoso-3.jpg'}} />

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
