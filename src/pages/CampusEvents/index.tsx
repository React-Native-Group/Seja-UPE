import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/core";

import { RobotContainer } from "./styles";
import { AssetWidgetEventsIcon, AssetRobotSmileIcon } from "../../assets";

import {
  Avatar,
  ButtonEvent,
  CardBaloon,
  ModalWebView,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from "../../core/components";
import { RoutesParamList } from "../../routes";
import { CampusEvent, useEnterScreen, useLeaveScreen } from "../../core/hooks";

export interface CampusEventsProps { }

export const CampusEvents: FunctionComponent<CampusEventsProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, "CampusEvents">>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState("about:blank");
  const [isLoading, setIsLoading] = useState(true);

  function onOpenModal(source:string) {
    setLink(source);
    setIsModalOpen(true);
  }

  useEnterScreen(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });

  useLeaveScreen(() => {
    setIsLoading(true)
  });

  return (
    <PageLayout 
      showHeader
      showSpinner={isLoading}
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
            Prestigie nossos eventos acadêmicos, fique por dentro do que ocorre na universidade.
          </Paragraph>
        </CardBaloon>

      </RobotContainer>

      <Spacer verticalSpace={32} />

      {route.params.map((event: CampusEvent) => (
        <Fragment key={String(event.id)}>
          <ButtonEvent title={event.name} onPress={() => onOpenModal(event.link)}/>
          <Spacer verticalSpace={18} />
        </Fragment>
      ))}

      <ModalWebView link={link} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

    </PageLayout>
  );
}
