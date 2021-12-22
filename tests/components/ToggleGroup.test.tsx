import React from "react";
import { ToggleGroup } from "../../src/core/components";
import { fireEvent, render } from "../core";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('render of ToggleGroup', async () => {
  render(
    <ToggleGroup
      onChange={(e: 'ssa' | 'sisu') => {}}
      initialValue="ssa"
    />
  );
});

test('press ToggleGroup', async () => {
  
  const { getByTestId } = render(
    <ToggleGroup
      onChange={() => {}}
      initialValue="ssa"
    />
  );

  fireEvent(getByTestId('togglegroup.container'), 'onPress', { 
    nativeEvent: { 
      locationX: 200,
      locationY: 300
    }
  });

});