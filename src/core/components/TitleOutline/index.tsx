import React, { FunctionComponent } from 'react';
import { ImageSourcePropType } from 'react-native';

import { Render } from '../Render';
import { AssetWidgetSampleIcon } from '../../../assets';
import { Banner, Container, Divider, Group, Title } from './styles';

export interface TitleOutlineProps {
  icon?: ImageSourcePropType;
  title: string;
}

export const TitleOutline: FunctionComponent<TitleOutlineProps> = ({ title, icon }) => {
  return (
    <Container>
      <Group>
        <Render if={!!icon}>
          <Banner source={icon || AssetWidgetSampleIcon} />
        </Render>
        <Title numberOfLines={1}>{title}</Title>
      </Group>
      <Divider />
    </Container>
  );
}
