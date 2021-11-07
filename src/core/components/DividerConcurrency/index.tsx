import React, { FunctionComponent, useEffect, useState } from 'react';
import { AssetSisuWhiteLogo, AssetUpeWhiteLogo } from '../../../assets';
import { Banner, Container, Title } from './styles';

export interface DividerConcurrencyProps {
  type: 'ssa' | 'sisu',
  title: string
}

export const DividerConcurrency: FunctionComponent<DividerConcurrencyProps> = ({ type, title }) => {
  const [banner, setBanner] = useState(AssetUpeWhiteLogo);

  useEffect(() => {
    if (type == 'ssa') setBanner(AssetUpeWhiteLogo);
    if (type == 'sisu') setBanner(AssetSisuWhiteLogo);
  }, [type]);

  return (
    <Container>
      <Banner source={banner} />
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  );
}
