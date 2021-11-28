import React, { Fragment, FunctionComponent } from 'react';
import { AssetRobotKindIcon } from '../../assets';
import { Avatar, Badge, ButtonCourse, CardBaloon, PageLayout, Paragraph, Spacer, TitleOutline } from '../../core/components';
import { RobotContainer, RobotContainerRow } from './styles';

export interface SearchResultsProps {

}

export const SearchResults: FunctionComponent<SearchResultsProps> = () => {
  return (
    <PageLayout
      showHeader
      canGoBack
    >
      <TitleOutline title="Cursos encontrados" />
      <Spacer verticalSpace={32} />

      <RobotContainer>
        <Avatar source={AssetRobotKindIcon} diameter={96} padding={8} />

        <CardBaloon direction="left">
          <Paragraph
            paddingLeft="8px"
            paddingRight="8px"
            paddingTop="8px"
            paddingBottom="8px"
            justify
          >
            Encontrei 7 cursos com base nas informações que você me passou.
          </Paragraph>
        </CardBaloon>
      </RobotContainer>

      <Spacer verticalSpace={32} />

      <ButtonCourse title="Medicina" />
      <Spacer verticalSpace={18} />

      <ButtonCourse title="Engenharia de Software" />
      <Spacer verticalSpace={18} />

      <ButtonCourse title="Psicologia" />
      <Spacer verticalSpace={18} />

      <ButtonCourse title="Letras" />
      <Spacer verticalSpace={18} />

    </PageLayout>
  );
}
