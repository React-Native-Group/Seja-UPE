import React from 'react';
import { Button } from '../../src/core/components';
import { render } from "../core";

test('render of Button', async () => {

  render(
    <Button 
      text="button" 
      bgColor="blue" 
      color="white"
    />
  );

});
