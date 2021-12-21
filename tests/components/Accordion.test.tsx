import React from 'react';
import { Accordion, Paragraph } from "../../src/core/components";
import { render } from "../core";

test('render of Acorddion', async () => {

  render(
    <Accordion
      title="Accordion"
      body="body"
      bold={true}
      beginOpen
    >
        <Paragraph>Hello!</Paragraph>
    </Accordion>
  );

});
