import React, { FunctionComponent } from 'react';
import { ImageSourcePropType } from 'react-native';

import { Render } from '../Render';
import { useTheme } from '../../hooks';
import { AssetWidgetSampleIcon } from '../../../assets';
import { Banner, Container, Divider, Group, Title } from './styles';

export interface TitleOutlineProps {
  icon?: ImageSourcePropType;
  title: string;
  bold?: boolean;
}

export const TitleOutline: FunctionComponent<TitleOutlineProps> = ({ title, icon, bold = true }) => {
  const [theme] = useTheme();

  return (
    <Container>
      <Group>
        <Render if={!!icon}>
          <Banner source={icon || AssetWidgetSampleIcon} resizeMode="contain" />
        </Render>
        <Title {...theme} numberOfLines={1} bold={bold}>{title}</Title>
      </Group>
      <Divider {...theme} />
    </Container>
  );
}
