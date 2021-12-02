import React from 'react';
import { MultiSlider } from '../../src/core/components';
import { render } from '../core';

test('render of MultiSlider', async () => {
  render(
    <MultiSlider
      minValue={1}
      maxValue={100}
      minDistance={10}
    />
  )
});