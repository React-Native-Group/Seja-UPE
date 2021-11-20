import React, { Fragment, FunctionComponent, useState } from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { AssetBookIcon, AssetWidgetCampusIcon, AssetWidgetContactIcon, AssetWidgetCoursesIcon, AssetWidgetEventsIcon } from '../../assets';
import { Accordion, ButtonSocial, ButtonWidget, MapView, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';
import { RoutesParamList } from '../../routes';

type WidgetData = {
  key: string;
  title: string;
  route: keyof RoutesParamList;
  icon: ImageSourcePropType;
  params: any;
}

export interface CampusProps {
  
}

export const Campus: FunctionComponent<CampusProps> = () => {
  const [widgets, setWidgets] = useState<WidgetData[]>([
    { key: '0', title: 'Principais Eventos', route: 'CampusEvents', icon: AssetWidgetEventsIcon, params: {} }, 
    { key: '1', title: 'Contatos', route: 'CampusContact', icon: AssetWidgetContactIcon, params: {} }, 
    { key: '2', title: 'Cursos', route: 'CampusCourses', icon: AssetWidgetCoursesIcon, params: {} }
  ]);

  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      
      <TitleOutline title="Sobre o Campus" icon={AssetWidgetCampusIcon} />
      <Spacer verticalSpace={32} />

      <FlatList
        data={widgets}
        renderItem={({ item }) => (
          <Fragment>
            <ButtonWidget legend={item.title} banner={item.icon} />
          </Fragment>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Spacer verticalSpace={16} />

      <TitleOutline title="Detalhes do Campus" />
      <Spacer verticalSpace={24} />

      <Accordion title="Descrição">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <TitleOutline title="Localização" />
      <Spacer verticalSpace={24} />

      <MapView 
        height="200px"
        region={{
          latitude: -8.8833723,
          longitude: -36.4970813,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        points={[
          {
            title: 'Universidade de Pernambuco',
            description: 'Campus Garanhuns',
            coords: {
              latitude: -8.8833723,
              longitude: -36.4970813
            }
          }
        ]}        
      />
      <Spacer verticalSpace={32} />

      <TitleOutline title="Redes Sociais" />
      <Spacer verticalSpace={24} />

      <ButtonSocial text="Instagram" type="instagram" />
      <Spacer verticalSpace={16} />

      <ButtonSocial text="Facebook" type="facebook" />
      <Spacer verticalSpace={16} />

      <ButtonSocial text="Youtube" type="youtube" />
      <Spacer verticalSpace={16} />

    </PageLayout>
  );
}
