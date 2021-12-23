import React from "react";
import { act, create } from "../core";
import { ButtonWidget } from "../../src/core/components";

test("render of ButtonWidget", () => {
  act(() => {
    create(
      <ButtonWidget 
        legend="legend"
      />
    );
  });
});