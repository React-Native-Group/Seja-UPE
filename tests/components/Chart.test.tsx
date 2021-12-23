import React from "react";
import { act } from "react-test-renderer";
import { Chart } from "../../src/core/components";
import { fireEvent, render } from "../core";

test("render of Chart", () => {
  render(
    <Chart 
      legend="Texto de exemplo" 
      labels={["2017", "2018", "2019", "2020"]} 
      data={[500, 501, 502, 503]} 
    />
  );
});

test("layout change test", () => {
  const { getByTestId } = render(
    <Chart 
      legend="Texto de exemplo" 
      labels={["2017", "2018", "2019", "2020"]} 
      data={[500, 501, 502, 503]} 
    />
  );

  act(() => {
    fireEvent(getByTestId("chart.container"), "onLayout", {
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
})