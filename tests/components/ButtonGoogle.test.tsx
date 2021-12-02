import React from 'react';
import { ButtonGoogle } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonGoogle', async () => {

  render(
    <ButtonGoogle 
      onPress={()=>{}}
      text="ButtonGoogle"
    />
  );

});