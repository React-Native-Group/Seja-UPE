import React from "react";
import { act, fireEvent, render } from "../core";
import { ToggleGroup } from "../../src/core/components";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test("render of ToggleGroup", () => {
  render(
    <ToggleGroup
      onChange={(e: "ssa" | "sisu") => {}}
      initialValue="ssa"
    />
  );
});

test("press ToggleGroup", async () => {
  const { getByTestId } = render(
    <ToggleGroup
      onChange={() => {}}
      initialValue="ssa"
    />
  );

  await act(async () => {
    fireEvent(getByTestId("togglegroup.container"), "onPress", { 
      nativeEvent: { 
        locationX: 200,
        locationY: 300
      }
    });
  });
});