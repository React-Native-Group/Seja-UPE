import React from "react";
import { ToggleView } from "../../src/core/components";
import { render } from "../core";

test('render of ToggleView', async () => {
  render(
    <ToggleView 
      initial={"horizontal"}
      onToggle={() => {}}
    />
  );
});