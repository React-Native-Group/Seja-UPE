import React, {  Fragment, FunctionComponent, useState } from 'react';
import { FlatList, View } from 'react-native';

import { useTheme } from '../../core/hooks';
import { AvatarRow, BadgeContainer, NameContainer, NameText } from './styles';
import { Avatar, Badge, ButtonLattes, ButtonLink, ModalWebView, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';

export interface CourseProfessorProps { }

export const CourseProfessor: FunctionComponent<CourseProfessorProps> = () => {
  const [theme] = useTheme();

  const photo = 'https://images.generated.photos/Ra3atuRPvZSe0FkVXmykFEl-oiLNEuc_U1rTkZ3gZs8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI3MTAxLmpwZw.jpg';
  const areas = ['Engenharia', 'Computação', 'Design', 'Exatas'];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageLayout 
      showHeader
      canGoBack
    >
      <AvatarRow>
        <Avatar source={{uri: photo}} diameter={220} />
      </AvatarRow>

      <Spacer verticalSpace={24} />

      <NameContainer {...theme}>
        <NameText {...theme}>Ariane Nunes Rodrigues</NameText>
      </NameContainer>

      <Spacer verticalSpace={16} />
      
      <FlatList 
        data={areas}
        horizontal={true}
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
        É doutoranda pela Universidade Federal de Pernambuco (UFPE). 
        Possui mestrado na área de Engenharia de Software pela Universidade 
        de Pernambuco (2012). Possui graduação em Sistemas de Informação pela 
        Universidade de Pernambuco (2010). Atualmente é professora assistente 
        da Universidade de Pernambuco conduzindo pesquisas na área de Tecnologia 
        e Educação e ensino de Computação baseado PBL.
      </Paragraph>
      <Spacer verticalSpace={32} />

      <TitleOutline title="E-mail para contato" />
      <Spacer verticalSpace={16} />

      <ButtonLink iconName="envelope" text="ariane.rodrigues@upe.br" />
      <Spacer verticalSpace={64} />

      <ButtonLattes onPress={() => setIsModalOpen(true)}/>
      <Spacer verticalSpace={16} />
      
      <ModalWebView link={'http://lattes.cnpq.br/8314520403747891'} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

    </PageLayout>
  );
}