import React from 'react';
import { Button } from '../../src/core/components';
import { fireEvent, render, waitFor } from "../core";

test('render of Button', async () => {

  render(
    <Button 
      text="button" 
      bgColor="blue" 
      color="white"
    />
  );

});

test('press Button', async () => {
  
  const { getByTestId } = render(
    <Button 
      text="button" 
      bgColor="blue" 
      color="white"
      onPress={() => {}}
    />
  );

  fireEvent(getByTestId('button.container'), 'onPress', { 
    nativeEvent: { 
      locationX: 100, 
      locationY: 100 
    }
  });

});