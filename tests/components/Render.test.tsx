import React from "react";
import { render } from "../core";
import { Paragraph, Render } from "../../src/core/components";

test("render of Render", () => {
  render(
    <Render if={false}>
      <Paragraph>
        Hello!
      </Paragraph>
    </Render>
  );
});