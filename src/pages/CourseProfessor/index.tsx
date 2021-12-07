import React, { FunctionComponent, useState } from 'react';
import { FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';

import { useEnterScreen, useLeaveScreen, useTheme } from '../../core/hooks';
import { RoutesParamList } from '../../routes';
import { AssetProfessorPhotoIcon } from '../../assets';
import { AvatarRow, BadgeContainer, NameContainer, NameText } from './styles';
import { Avatar, Badge, ButtonLattes, ButtonLink, ModalWebView, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';

export interface CourseProfessorProps { }

export const CourseProfessor: FunctionComponent<CourseProfessorProps> = () => {
  const [theme] = useTheme();
  const route = useRoute<RouteProp<RoutesParamList, 'CourseProfessor'>>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function professor() {
    return route.params;
  }

  useEnterScreen(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });

  useLeaveScreen(() => {
    setIsLoading(true);
  });

  return (
    <PageLayout 
      showHeader
      showSpinner={isLoading}
      canGoBack
    >
      <AvatarRow>
        <Avatar source={!!professor().photoUrl ? { uri: professor().photoUrl} : AssetProfessorPhotoIcon} diameter={220} />
      </AvatarRow>

      <Spacer verticalSpace={24} />

      <NameContainer {...theme}>
        <NameText {...theme}>{professor().name}</NameText>
      </NameContainer>

      <Spacer verticalSpace={16} />
      
      <FlatList 
        data={professor().areas}
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <BadgeContainer>
            <Badge 
              bold 
              text={item} 
              animated={false} 
              fontSize="14px" 
              borderRadius="8px" 
            />
          </BadgeContainer>
        )}
      />

      <Spacer verticalSpace={24} />

      <TitleOutline title="Biografia" />
      <Spacer verticalSpace={16} />

      <Paragraph fontSize="18px" justify>
        {professor().shortbio}
      </Paragraph>
      <Spacer verticalSpace={32} />

      <TitleOutline title="E-mail para contato" />
      <Spacer verticalSpace={16} />

      <ButtonLink iconName="envelope" text={!!professor().email ? professor().name : "E-mail indisponível"} />
      <Spacer verticalSpace={64} />

      <ButtonLattes onPress={() => setIsModalOpen(true)}/>
      <Spacer verticalSpace={16} />
      
      <ModalWebView 
        link={!!professor().lattesUrl && professor().lattesUrl != "-" ? professor().lattesUrl : "about:blank"} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />

    </PageLayout>
  );
}