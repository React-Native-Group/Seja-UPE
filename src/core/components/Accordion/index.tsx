import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

import { Render } from '../Render';
import { Container, Header, Title, Body, Text } from './styles';
import { useTheme } from '../../hooks';

export interface AccordionProps {
  onToggle?: (state: boolean) => void;
  title: string;
  body?: string;
  bold?: boolean;
  beginOpen?: boolean;
  children?: ReactNode;
}

export const Accordion: FunctionComponent<AccordionProps> = ({ onToggle, title, body, bold = false, beginOpen = false, children }) => {
  const [theme] = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [borderRadius, setBorderRadius] = useState(8);
  
  function toggle(){
    if (!!onToggle)
      onToggle(!isOpen);
    setPaddingBottom(!isOpen ? 8 : 0);
    setBorderRadius(!isOpen ? 0 : 8);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (beginOpen)
      toggle();
  }, []);

  return (
    <Container {...theme} paddingBottom={paddingBottom}>

      <Header 
        {...theme}
        borderBottomRadius={borderRadius} 
        onPress={toggle}
      >
        <Title {...theme} bold={bold}>{title}</Title>
        <FontAwesome 
          name={isOpen ? "caret-down" : "caret-right"} 
          size={24} 
          color={theme.white} 
        />
      </Header>

      <Render if={isOpen}>
        <Body nestedScrollEnabled {...theme}>
          <Render if={!!body}>
            <Text {...theme}>
              {body}
            </Text>
          </Render>
          <Render if={!body}>
            {children}
          </Render>
        </Body>
      </Render>

    </Container>
  );
}
