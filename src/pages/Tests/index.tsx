import React, { Fragment, FunctionComponent } from 'react';

import { Carousel, Header, Spacer, ButtonCourse, ButtonEvent } from '../../core/components';
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
        <Spacer verticalSpace={50} />
        <ButtonEvent title="Semana Científica do Agreste Pernambucano" />
      </Scrollable>
    </Fragment>
  );
}