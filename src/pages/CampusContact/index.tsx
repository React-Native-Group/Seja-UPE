import React, { Fragment, FunctionComponent } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { AccordionBody } from './styles';
import { RoutesParamList } from '../../routes';
import { AssetWidgetContactIcon } from '../../assets';
import { useTheme, CampusContact as Contact} from '../../core/hooks';
import { Accordion, ButtonLink, PageLayout, Spacer, TitleOutline } from '../../core/components';


export interface CampusContactProps { }

export const CampusContact: FunctionComponent<CampusContactProps> = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'CampusContact'>>();
  const [theme] = useTheme();
  const categorias = route.params.map(v => v.categoryName).filter(function (value, index, array) { 
    return array.indexOf(value) === index;
  }).map(v => route.params.filter(x => x.categoryName == v))

  return (
    <PageLayout 
      showHeader
      canGoBack
    >
      <TitleOutline title="Contatos" icon={AssetWidgetContactIcon} />
      <Spacer verticalSpace={32} />
      {categorias.map((category: Contact[]) => (
        <Fragment key={String(category[0].id)}>
          <Accordion title={category[0].categoryName} bold>
            <AccordionBody>
              {category.map((contact: Contact) => (
                <Fragment key={String(contact.id)}>
                  <ButtonLink text={contact.value} iconName={contact.fieldIcon} iconColor={theme.red} />
                  <Spacer verticalSpace={8} />
                </Fragment>
              ))}
            </AccordionBody>
          </Accordion> 
          <Spacer verticalSpace={16} />
        </Fragment>
      ))}

    </PageLayout>
  );
}
