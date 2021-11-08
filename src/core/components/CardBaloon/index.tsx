import React, { FunctionComponent } from 'react';
import { AssetTriangleLeftIcon, AssetTriangleRightIcon } from '../../../assets';
import { Render } from '../Render';
import { Box, Container, ArrowLeft, ArrowRight } from './styles';

export interface CardBaloonProps {
  direction?: 'left' | 'right';
  children: React.ReactNode;
}

export const CardBaloon: FunctionComponent<CardBaloonProps> = ({ children, direction: dir }) => {
  return (
    <Box paddingLeft={dir == 'left' ? 27 : 0} paddingRight={dir == 'right' ? 27 : 0}>
      <Container>
        <Render if={dir == 'left'}>
          <ArrowLeft source={AssetTriangleLeftIcon} />
        </Render>
        <Render if={dir == 'right'}>
          <ArrowRight source={AssetTriangleRightIcon} />
        </Render>
        {children}
      </Container>
    </Box>
  );
}
