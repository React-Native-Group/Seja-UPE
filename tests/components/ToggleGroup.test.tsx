import React from "react";
import { ToggleGroup } from "../../src/core/components";
import { render } from "../core";

test('render of ToggleGroup', async () => {
  render(
    <ToggleGroup
      onChange={(e: 'ssa' | 'sisu') => {}}
      initialValue="ssa"
    />
  );
});