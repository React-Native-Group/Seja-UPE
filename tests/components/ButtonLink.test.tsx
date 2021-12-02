import React from 'react';
import { ButtonLink } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonLink', async () => {

  render(
    <ButtonLink 
      iconName="envelope"
      text="ButtonLink"
    />
  );

});