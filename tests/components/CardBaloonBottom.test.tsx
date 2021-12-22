import React from "react";
import { render } from "../core";
import { CardBaloonBottom, Paragraph } from "../../src/core/components";

test("render of CardBaloonBottom", () => {
  render(
    <CardBaloonBottom>
      <Paragraph
        paddingLeft="8px"
        paddingRight="8px"
        paddingTop="8px"
        paddingBottom="8px"
        justify
      >
        Mensagem informativa do robô da UPE.
      </Paragraph>
    </CardBaloonBottom>
  );
});