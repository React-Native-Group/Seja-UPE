import React from "react";
import { Spacer } from "../../src/core/components";
import { render } from "../core";

test('render of Spacer', () => {
  render(
    <Spacer
      verticalSpace={10}
      horizontalSpace={20}
    />
  );
});