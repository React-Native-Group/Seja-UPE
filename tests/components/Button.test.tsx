import React from 'react';
import { fireEvent, render } from "../core";
import { Button } from '../../src/core/components';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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