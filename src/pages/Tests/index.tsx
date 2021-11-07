import React, { Fragment, FunctionComponent } from 'react';

import { DividerConcurrency, Header, Spacer } from '../../core/components';
import Carousel from '../../core/components/Carousel';
import { Scrollable } from './styles';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true} />
        <Spacer verticalSpace={50} />
        <Carousel length={5} currentIndex={0} />
        <Spacer verticalSpace={50} />
        <DividerConcurrency type="sisu" title="Informações Sisu"/>
      </Scrollable>
    </Fragment>
  );
}