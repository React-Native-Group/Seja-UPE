import React, { FunctionComponent } from "react";

import { Render } from "../Render";
import { useTheme } from "../../hooks";
import { Box, Container, ArrowLeft, ArrowRight } from "./styles";
import { AssetTriangleLeftIcon, AssetTriangleRightIcon } from "../../../assets";

export interface CardBaloonProps {
  direction?: "left" | "right";
  children: React.ReactNode;
}

export const CardBaloon: FunctionComponent<CardBaloonProps> = ({ children, direction: dir }) => {
  const [theme] = useTheme();
  
  return (
    <Box paddingLeft={dir == "left" ? 27 : 0} paddingRight={dir == "right" ? 27 : 0}>
      <Container {...theme}>
        <Render if={dir == "left"}>
          <ArrowLeft source={AssetTriangleLeftIcon} />
        </Render>
        <Render if={dir == "right"}>
          <ArrowRight source={AssetTriangleRightIcon} />
        </Render>
        {children}
      </Container>
    </Box>
  );
}
