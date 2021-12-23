import React from "react";
import { Spacer, VerticalContent } from "../../src/core/components";
import { render } from "../core";

test("render of VerticalContent", () => {
  render(
    <VerticalContent>
      <Spacer/>
    </VerticalContent>
  );
});