import React, { Fragment, FunctionComponent } from 'react';

import { Header, Spacer, Chart } from '../../core/components';
import { Scrollable } from './styles';

import { Dimensions } from 'react-native';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true} />
        <Spacer verticalSpace={50} />
        <Chart 
          legend="Evolução da concorrência"
          height={220}
          width={Dimensions.get('window').width} 
          labels={['2017', '2018', '2019', '2020', '2021']} 
          data={[455, 872, 679, 546, 892, 947]}          
        />
        <Spacer verticalSpace={50} />
      </Scrollable>
    </Fragment>
  );
}