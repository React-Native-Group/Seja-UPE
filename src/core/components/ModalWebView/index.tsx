import React, { FunctionComponent, useState } from 'react';
import { Dimensions, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

import { Spacer } from '../Spacer';
import { useTheme } from '../../hooks';
import { CloseButton, Header, HeaderDivider, ModalContainer, ViewContainer } from './styles';

export interface ModalWebViewProps {
  link: string;
}

export const ModalWebView: FunctionComponent<ModalWebViewProps> = ({ link }) => {
  const [theme] = useTheme();
  const [isOpenLink, setOpenLink] = useState(true);
  const {height} = Dimensions.get('window');

  function closeModal(){
    setOpenLink(false);
  }

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={isOpenLink}
    >
      <ModalContainer activeOpacity={1}>
        <ViewContainer>
          <Spacer verticalSpace={0.2 * height}/>

          <Header {...theme}>
            <CloseButton 
              name="x" 
              size={24} 
              color={theme.blue} 
              onPress={closeModal}
            />
            <HeaderDivider {...theme}/>
          </Header>

          <WebView 
            onError={closeModal}
            onHttpError={closeModal}
            source={{uri: link}}
          />
        </ViewContainer>
      </ModalContainer>
    </Modal>
  );
}
