import React from "react";
import { DividerConcurrency } from "../../src/core/components";
import { render } from "../core";

test("render of DividerConcurrency", () => {
  render(
    <DividerConcurrency
      type="ssa"
      title="Informações adicionais"
    />
  );
});