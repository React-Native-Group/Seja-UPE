import React from "react";
import { Paragraph, Render } from "../../src/core/components";
import { render } from "../core";

test('render of Render', async () => {
  render(
    <Render 
      if={false}
    >
      <Paragraph>
        Hello!
      </Paragraph>
    </Render>
  )
});