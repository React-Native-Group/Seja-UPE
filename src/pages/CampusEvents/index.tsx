import React, { FunctionComponent, useState } from 'react';

import { RobotContainer } from './styles';
import { AssetWidgetEventsIcon, AssetRobotSmileIcon } from '../../assets';

import {
  Avatar,
  ButtonEvent,
  CardBaloon,
  ModalWebView,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from '../../core/components';

export interface CampusEventsProps { }

export const CampusEvents: FunctionComponent<CampusEventsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState('about:blank');

  function onOpenModal(source:string) {
    setLink(source);
    setIsModalOpen(true);
  }

  return (
    <PageLayout 
      showHeader
      canGoBack
    >
      <TitleOutline title="Principais Eventos" icon={AssetWidgetEventsIcon} />
      <Spacer verticalSpace={32} />

      <RobotContainer>

        <Avatar source={AssetRobotSmileIcon} diameter={80} padding={16} />
        <CardBaloon direction="left">
          <Paragraph
            paddingLeft="8px"
            paddingRight="8px"
            paddingTop="8px"
            paddingBottom="8px"
            fontSize="16px"
            justify
          >
            Prestigie nossos eventos acadêmicos, 
            fique por dentro do que ocorre na universidade.
          </Paragraph>
        </CardBaloon>

      </RobotContainer>

      <Spacer verticalSpace={32} />

      <ButtonEvent title="SECAP" onPress={() => onOpenModal("https://doity.com.br/secap")}/>
      <Spacer verticalSpace={18} />

      <ButtonEvent title="SINPE" onPress={() => onOpenModal("https://secap.com.br/2021/")}/>
      <Spacer verticalSpace={18} />

      <ButtonEvent title="ENCUPE" onPress={() => onOpenModal("http://www.upe.br/garanhuns/3a-edicao-do-encupe/")}/>
      <Spacer verticalSpace={18} />

      <ButtonEvent title="Jogos Multicampi" onPress={() => onOpenModal("http://www.upe.br/garanhuns/ii-jogos-multicampi/")}/>
      <Spacer verticalSpace={18} />

      <ButtonEvent title="Jornal Extensionista" onPress={() => onOpenModal("http://www.upe.br/garanhuns/jornal-extensionista/")}/>
      <Spacer verticalSpace={18} />

      <ModalWebView link={link} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

    </PageLayout>
  );
}
