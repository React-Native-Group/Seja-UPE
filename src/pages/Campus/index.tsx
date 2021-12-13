import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { FlatList, ImageSourcePropType, Linking } from "react-native";
import capitalize from "capitalize-first-letters";

import {
  AssetWidgetCampusIcon,
  AssetWidgetContactIcon,
  AssetWidgetCoursesIcon,
  AssetWidgetEventsIcon
} from "../../assets";

import {
  Accordion,
  ButtonSocial,
  ButtonWidget,
  MapView,
  PageLayout,
  Paragraph,
  Spacer,
  TitleOutline
} from "../../core/components";
import { CampusSocialNetwork, useEnterScreen, useLeaveScreen } from "../../core/hooks";

import { CampusContactNavigationProp, CampusCoursesNavigationProp, CampusEventsNavigationProp, RoutesParamList } from "../../routes";

type WidgetData = {
  key: string;
  title: string;
  route: keyof RoutesParamList;
  icon: ImageSourcePropType;
  params: any;
}

type NavigationProps =  CampusEventsNavigationProp
                      | CampusContactNavigationProp
                      | CampusCoursesNavigationProp;

export interface CampusProps { }

export const Campus: FunctionComponent<CampusProps> = () => {

  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<RoutesParamList, "Campus">>();

  const [widgets, setWidgets] = useState<WidgetData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function onWidgetClick(item: WidgetData){
    navigation.navigate(item.route, item.params);
  }

  useEffect(() => {
    setWidgets([
      { key: "0", title: "Principais Eventos",  route: "CampusEvents",  icon: AssetWidgetEventsIcon,  params: route.params.events }, 
      { key: "1", title: "Contatos",            route: "CampusContact", icon: AssetWidgetContactIcon, params: route.params.contacts }, 
      { key: "2", title: "Cursos",              route: "CampusCourses", icon: AssetWidgetCoursesIcon, params: route.params }
    ]);
  }, [route]);

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
      
      <TitleOutline title="Sobre o Campus" icon={AssetWidgetCampusIcon} />
      <Spacer verticalSpace={32} />

      <FlatList
        data={widgets}
        overScrollMode="never"
        renderItem={({ item }) => (
          <Fragment>
            <ButtonWidget legend={item.title} banner={item.icon} onPress={() => onWidgetClick(item)}/>
          </Fragment>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Detalhes do Campus" />
      <Spacer verticalSpace={24} />

      <Accordion title="Descrição" beginOpen>
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px" justify>
          {route.params.description}
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <TitleOutline title="Localização" />
      <Spacer verticalSpace={24} />

      <MapView 
        height="200px"
        region={{
          latitude: Number(route.params.latitude),
          longitude: Number(route.params.longitude),
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        points={[
          {
            title: "Universidade de Pernambuco",
            description: route.params.name,
            coords: {
              latitude: Number(route.params.latitude),
              longitude: Number(route.params.longitude)
            }
          }
        ]}        
      />
      <Spacer verticalSpace={32} />

      <TitleOutline title="Redes Sociais" />
      <Spacer verticalSpace={24} />

      {route.params.socialNetworks.map((social: CampusSocialNetwork) => (
        <Fragment key={String(social.id)}>
          <ButtonSocial 
            text={capitalize(social.name)} 
            type={social.name} 
            onPress={() => Linking.openURL(social.value)}
          />
          <Spacer verticalSpace={16} />
        </Fragment>
      ))}

    </PageLayout>
  );
}
