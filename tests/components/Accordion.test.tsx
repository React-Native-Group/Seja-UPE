import React from "react";
import { create } from "../core";
import { Accordion, Paragraph } from "../../src/core/components";

test("render of Acorddion", async () => {
  create(
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
