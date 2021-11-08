import React, { Fragment, FunctionComponent } from 'react';

import { Header, Spacer, ButtonWidget } from '../../core/components';
import { Container, Scrollable } from './styles';

import { AssetWidgetSampleIcon } from '../../assets';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true} />
        <Container>
          <Spacer verticalSpace={50} />
          <ButtonWidget 
            legend="Sobre o Campus" 
          />
          <Spacer verticalSpace={50} />
        </Container>
      </Scrollable>
    </Fragment>
  );
}