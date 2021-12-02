import React from 'react';
import { ButtonWidget } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonWidget', async () => {

  render(
    <ButtonWidget 
      legend="legend"
    />
  );

});