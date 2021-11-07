import React, { Fragment, FunctionComponent } from 'react';

import { Carousel, Header, Spacer, CardBenefited } from '../../core/components';
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
        <CardBenefited value={12}/>
        <Spacer verticalSpace={50} />
      </Scrollable>
    </Fragment>
  );
}