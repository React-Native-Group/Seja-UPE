import React from "react";
import { render } from "../core";
import { ButtonEvent } from "../../src/core/components";

test("render of ButtonEvent", () => {
  render(
    <ButtonEvent 
      title="ButtonEvent"
    />
  );
});