import React from 'react';
import { Header } from '../../src/core/components';
import { fireEvent, render } from "../core";

test('render of Header', async () => {

  render(
    <Header
      canGoBack
      showTabs 
    />
  );

});

test('back button press test', async () => {
  const { getByTestId } = render (
    <Header
      canGoBack
      showTabs 
    />
  );

  fireEvent(getByTestId("header.backbutton"), "onPress", {
    nativeEvent: {
      locationX: 25, 
      locationY: 25 
    }
  })
})

test('tab press test', async () => {
  const { getByTestId } = render (
    <Header
      canGoBack
      showTabs 
    />
  );

  fireEvent(getByTestId("header.tab"), "onPress", {
    nativeEvent: {
      locationX: 75, 
      locationY: 25 
    }
  })
})