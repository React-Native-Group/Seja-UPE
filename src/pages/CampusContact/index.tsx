import React, { FunctionComponent } from 'react';

import { useTheme } from '../../core/hooks';
import { AssetCampusContactIcon } from '../../assets';
import { Accordion, ButtonLink, PageLayout, Spacer, TitleOutline } from '../../core/components';
import { AccordionBody } from './styles';

export interface CampusContactProps {
  
}

export const CampusContact: FunctionComponent<CampusContactProps> = () => {
  const [theme] = useTheme();

  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      <TitleOutline title="Teste de sanfona" icon={AssetCampusContactIcon} />
      <Spacer verticalSpace={32} />

      <Accordion title="Escolaridade" bold>
        <AccordionBody>
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
          
          <Spacer verticalSpace={8} />
          
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
        </AccordionBody>
      </Accordion>

      <Spacer verticalSpace={16} />

      <Accordion title="Tesouraria" bold>
        <AccordionBody>
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
          
          <Spacer verticalSpace={8} />
          
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
        </AccordionBody>
      </Accordion>
      
      <Spacer verticalSpace={16} />
      
      <Accordion title="Biblioteca" bold>
        <AccordionBody>
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
          
          <Spacer verticalSpace={8} />
          
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
        </AccordionBody>
      </Accordion>

      <Spacer verticalSpace={16} />

      <Accordion title="Acessoria" bold>
        <AccordionBody>
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
          
          <Spacer verticalSpace={8} />
          
          <ButtonLink text="escolaridade.multicampi@upe.br" iconName="envelope" iconColor={theme.red} />
        </AccordionBody>
      </Accordion>

      <Spacer verticalSpace={16} />

    </PageLayout>
  );
}
