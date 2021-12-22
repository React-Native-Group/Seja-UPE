import React from "react";
import { ButtonSocial } from "../../src/core/components";
import { render } from "../core";

test("render of ButtonSocial", () => {
  render(
    <ButtonSocial 
      text="ButtonSocial"
      type="instagram"
    />
  );
});