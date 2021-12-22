import React from "react";
import { Progress } from "../../src/core/components";
import { render } from "../core";

test("render of Progress", () => {
  render(
    <Progress
      value={50}
      maxValue={0} 
    />
  );
});