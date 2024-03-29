import React from 'react';
import { Header } from '../../src/core/components';
import { fireEvent, render } from "../core";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test("render of Header", () => {
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
      locationX: 25, 
      locationY: 75 
    }
  })
})

test('change theme test', async () => {
  const { getByTestId } = render (
    <Header
      canGoBack
      showTabs 
    />
  );

  fireEvent(getByTestId("header.theme"), "onPress", {
    nativeEvent: {
      locationX: 500,
      locationY: 25
    }
  })
})

