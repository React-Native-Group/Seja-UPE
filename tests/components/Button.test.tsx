import React from "react";
import { fireEvent, render, act } from "../core";
import { Button } from "../../src/core/components";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test("render of Button", () => {
  render(
    <Button 
      text="button" 
      bgColor="blue" 
      color="white"
    />
  );
});

test("press Button", () => {
  
  const { getByTestId } = render(
    <Button 
      text="button" 
      bgColor="blue" 
      color="white"
      onPress={() => {}}
    />
  );

  act(() => {
    fireEvent(getByTestId("button.container"), "onPress", { 
      nativeEvent: { 
        locationX: 100, 
        locationY: 100 
      }
    });
  });

});