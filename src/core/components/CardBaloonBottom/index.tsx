import React, { FunctionComponent, ReactNode } from 'react';
import { AssetTriangleTopIcon } from '../../../assets';
import { ArrowTop, Box, Container } from './styles';

export interface CardBaloonBottomProps {
  children: ReactNode;
}

export const CardBaloonBottom: FunctionComponent<CardBaloonBottomProps> = ({ children }) => {
  return (
    <Box>
      <Container>
        <ArrowTop source={AssetTriangleTopIcon} />
        {children}
      </Container>
    </Box>
  );
}
