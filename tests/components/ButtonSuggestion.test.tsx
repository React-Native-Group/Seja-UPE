import React from 'react';
import { ButtonSuggestion } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonSuggestion', async () => {

  render(
    <ButtonSuggestion 
      title="ButtonSuggestion"
      progress="progress"
    />
  );

});