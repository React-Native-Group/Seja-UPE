import React from 'react';
import { CardVacancy } from '../../src/core/components';
import { render } from "../core";

test('render of CardVacancy', async () => {

  render(
    <CardVacancy
      value={5}
    />
  );

});