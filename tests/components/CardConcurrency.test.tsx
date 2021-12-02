import React from 'react';
import { CardConcurrency } from '../../src/core/components';
import { render } from "../core";

test('render of CardConcurency', async () => {

  render(
    <CardConcurrency lowerNote="95" higherNote="72" />
  );

});