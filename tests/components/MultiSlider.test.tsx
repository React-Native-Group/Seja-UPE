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

  fireEvent(getByTestId('multislider.container'), 'onChange', { 
    nativeEvent: { 
      locationX: 100, 
      locationY: 100 
    }
  });

});