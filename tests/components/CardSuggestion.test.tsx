import React from "react";
import { CardSuggestion } from "../../src/core/components";
import { render } from "../core";

test("render of CardSuggestion", () => {
  render(
    <CardSuggestion
      title="Nome do Curso"
      progress="100"
    />
  );
});