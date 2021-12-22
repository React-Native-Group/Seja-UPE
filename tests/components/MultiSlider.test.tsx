import React from 'react';
import { MultiSlider } from '../../src/core/components';
import { fireEvent, render } from "../core";

test('render of MultiSlider', async () => {
  render(
    <MultiSlider
      minValue={1}
      maxValue={100}
      minDistance={10}
    />
  );
});

test('press MultiSlider', async () => {
  
  const { getByTestId } = render(
    <MultiSlider
      minValue={1}
      maxValue={100}
      minDistance={10}
      onChange={() => {}}
    />
  );

  fireEvent(getByTestId('multislider.container'), 'onLayout', { 
    nativeEvent: { 
      layout: {
        height: 300, 
        width: 400, 
        x: 0, 
        y: 0
      }
    }
  });

});