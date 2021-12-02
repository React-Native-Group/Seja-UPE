import React from 'react';
import { ButtonStep } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonStep', async () => {

  render(
    <ButtonStep 
      text="ButtonStep"
    />
  );

});