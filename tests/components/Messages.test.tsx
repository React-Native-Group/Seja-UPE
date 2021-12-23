import React from "react";
import { Messages } from "../../src/core/components";
import { render } from "../core";

test("render of Messages", () => {
  render(
    <Messages messages={[]} />
  );
});