import React from 'react';
import { Chart } from '../../src/core/components';
import { render } from "../core";

test('render of Chart', async () => {

  render(
    <Chart 
        legend="Texto de exemplo" 
        labels={['2017', '2018', '2019', '2020']} 
        data={[500, 501, 502, 503]} 
      />
  );

});