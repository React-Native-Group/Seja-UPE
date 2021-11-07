import React, { Fragment, FunctionComponent } from 'react';

import { Carousel, ButtonLattes, Header, Spacer } from '../../core/components';
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
        <ButtonLattes />
        <Spacer verticalSpace={50} />
      </Scrollable>
    </Fragment>
  );
}