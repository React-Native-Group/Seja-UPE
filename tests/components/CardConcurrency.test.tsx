import React from "react";
import { render } from "../core";
import { CardConcurrency } from "../../src/core/components";

test("render of CardConcurency", () => {
  render(
    <CardConcurrency
      lowerNote="95"
      higherNote="72"
    />
  );
});