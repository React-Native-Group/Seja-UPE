import React from "react";
import { ButtonGoogle } from "../../src/core/components";
import { render } from "../core";

test("render of ButtonGoogle", () => {
  render(
    <ButtonGoogle 
      onPress={()=>{}}
      text="ButtonGoogle"
    />
  );
});