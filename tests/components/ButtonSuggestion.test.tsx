import React from "react";
import { ButtonSuggestion } from "../../src/core/components";
import { render } from "../core";

test("render of ButtonSuggestion", () => {

  render(
    <ButtonSuggestion 
      title="ButtonSuggestion"
      progress="progress"
    />
  );

});