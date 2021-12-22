import React from "react";
import { Paragraph } from "../../src/core/components";
import { render } from "../core";

test("render of Paragraph", () => {
  render(
    <Paragraph
      numberOfLines={1}
      paddingBottom="10px"
      paddingLeft="20px"
      fontSize="32px"
      justify
    >
      Hello World!
    </Paragraph>);
});