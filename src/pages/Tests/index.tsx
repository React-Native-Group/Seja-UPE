import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';

import { ButtonGoogle, Header, Progress, Spacer } from '../../core/components';
import Carousel from '../../core/components/Carousel';
import { Scrollable } from './styles';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {
  const [value, setValue] = useState(0);
  let val = 0;
  
  useEffect(() => {
    setInterval(() => {
      if (val > 30)
        return;
      setValue(val++);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true} />
        <Spacer verticalSpace={50} />
        <Carousel length={5} currentIndex={0} />
        <Spacer verticalSpace={50} />
        <Progress value={value} maxValue={30} />
      </Scrollable>
    </Fragment>
  );
}