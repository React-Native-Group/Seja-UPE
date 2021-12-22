import React from "react";
import { render } from "../core";
import { ButtonLink } from "../../src/core/components";

test("render of ButtonLink", () => {
  render(
    <ButtonLink 
      iconName="envelope"
      text="ButtonLink"
    />
  );
});