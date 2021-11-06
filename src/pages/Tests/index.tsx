import React, { Fragment, FunctionComponent } from 'react';

import { ButtonGoogle, Header, Progress, Spacer } from '../../core/components';
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
        <Progress value={30} maxValue={30} />
      </Scrollable>
    </Fragment>
  );
}