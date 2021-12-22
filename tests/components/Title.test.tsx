import React from "react";
import { render } from "../core";
import { Title } from "../../src/core/components";

test('render of Title', () => {
  render(
    <Title align='center'>
      Hello World!
    </Title>
  );
})