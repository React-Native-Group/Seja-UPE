import React from "react";
import { ToggleView } from "../../src/core/components";
import { fireEvent, render } from "../core";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('render of ToggleView', async () => {
  render(
    <ToggleView 
      initial={"horizontal"}
      onToggle={() => {}}
    />
  );
});

test('press ToggleView', async () => {
  
  const { getByTestId } = render(
    <ToggleView 
      initial={"horizontal"}
      onToggle={() => {}}
    />
  );

  fireEvent(getByTestId('toggleview.container'), 'onPress', { 
    nativeEvent: { 
      locationX: 200,
      locationY: 300
    }
  });

});