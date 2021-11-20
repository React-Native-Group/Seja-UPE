import React, { FunctionComponent } from 'react';
import { AssetWidgetEventsIcon, AssetRobotNormalIcon } from '../../assets';
import { Avatar, ButtonEvent, CardBaloon, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';
import { RobotContainer } from './styles';

export interface CampusEventsProps {
  
}

export const CampusEvents: FunctionComponent<CampusEventsProps> = () => {
  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      <TitleOutline title="Principais Eventos" icon={AssetWidgetEventsIcon} />
      <Spacer verticalSpace={32} />

      <RobotContainer>

        <Avatar source={AssetRobotNormalIcon} diameter={80} padding={16} />
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

      <ButtonEvent title="SECAP" />
      <Spacer verticalSpace={18} />

      <ButtonEvent title="SINPE" />
      <Spacer verticalSpace={18} />

      <ButtonEvent title="ENCUPE" />
      <Spacer verticalSpace={18} />

      <ButtonEvent title="Jogos Multicampi" />
      <Spacer verticalSpace={18} />

      <ButtonEvent title="Jornal Extensionista" />
      <Spacer verticalSpace={18} />

    </PageLayout>
  );
}
