import React, { Fragment, FunctionComponent, useState } from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { AssetBookIcon, AssetCardCourseLogo, AssetWidgetCampusIcon, AssetWidgetClassificationIcon, AssetWidgetPlanningIcon, AssetWidgetProfessorsIcon } from '../../assets';
import { Accordion, ButtonWidget, CardCourse, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';
import { RoutesParamList } from '../../routes';

type WidgetData = {
  key: string;
  title: string;
  route: keyof RoutesParamList;
  icon: ImageSourcePropType;
  params: any;
}

export interface CourseProps {

}

export const Course: FunctionComponent<CourseProps> = () => {

  const [widgets, setWidgets] = useState<WidgetData[]>([
    { key: '0', title: 'Sobre o Campus',      route: 'Campus',            icon: AssetWidgetCampusIcon, params: {} }, 
    { key: '1', title: 'Corpo docente',       route: 'CourseProfessors',  icon: AssetWidgetProfessorsIcon, params: {} }, 
    { key: '2', title: 'Projeto Pedagógico',  route: 'CoursePlanning',    icon: AssetWidgetPlanningIcon, params: {} }, 
    { key: '3', title: 'Notas de Corte',      route: 'CourseConcurrency', icon: AssetWidgetClassificationIcon, params: {} }
  ]);

  return (
    <PageLayout
      showHeader
      canGoBack
      canScroll
    >

      <CardCourse text="Engenharia de Software" banner={AssetCardCourseLogo} />
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

      <TitleOutline title="Detalhes do Curso" />
      <Spacer verticalSpace={32} />

      <Accordion title="Sobre o Curso">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <Accordion title="Perfil do Curso">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <Accordion title="Contexto Histórico">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <Accordion title="Áreas de Atuação">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <Accordion title="Mercado de Trabalho">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>
      <Spacer verticalSpace={24} />

      <Accordion title="Como Ingressar">
        <Paragraph paddingLeft="16px" paddingRight="16px" paddingTop="16px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
      </Accordion>

    </PageLayout>
  );
}
