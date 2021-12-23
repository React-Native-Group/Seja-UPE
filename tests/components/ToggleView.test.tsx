import React from "react";
import { ToggleView } from "../../src/core/components";
import { act, fireEvent, render } from "../core";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test("render of ToggleView", () => {
  render(
    <ToggleView 
      initial={"horizontal"}
      onToggle={() => {}}
    />
  );
});

test("press ToggleView", async () => {
  
  const { getByTestId } = render(
    <ToggleView 
      initial={"horizontal"}
      onToggle={() => {}}
    />
  );
  await act(async () => {
    fireEvent(getByTestId("toggleview.container"), "onPress", { 
      nativeEvent: { 
        locationX: 200,
        locationY: 300
      }
    });
  });

});