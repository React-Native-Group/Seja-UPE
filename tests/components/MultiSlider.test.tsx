import React from "react";
import { act } from "react-test-renderer";
import { MultiSlider } from "../../src/core/components";
import { fireEvent, render } from "../core";

test("render of MultiSlider", () => {
  render(
    <MultiSlider
      minValue={1}
      maxValue={100}
      minDistance={10}
    />
  );
});

test("press MultiSlider", () => {
  
  const { getByTestId } = render(
    <MultiSlider
      minValue={1}
      maxValue={100}
      minDistance={10}
      onChange={() => {}}
    />
  );

  act(() => {
    fireEvent(getByTestId("multislider.container"), "onLayout", { 
      nativeEvent: { 
        layout: {
          height: 300, 
          width: 400, 
          x: 0, 
          y: 0
        }
      }
    });
  });

});