import React, { FunctionComponent, ReactNode } from "react";
import { AssetTriangleTopDarkIcon, AssetTriangleTopIcon } from "../../../assets";
import { useTheme } from "../../hooks";
import { ArrowTop, Box, Container } from "./styles";

export interface CardBaloonBottomProps {
  children: ReactNode;
}

export const CardBaloonBottom: FunctionComponent<CardBaloonBottomProps> = ({ children }) => {
  const [theme] = useTheme();
  
  return (
    <Box>
      <Container {...theme}>
        <ArrowTop source={theme.schemaName == 'light' ? AssetTriangleTopIcon : AssetTriangleTopDarkIcon} />
        {children}
      </Container>
    </Box>
  );
}
