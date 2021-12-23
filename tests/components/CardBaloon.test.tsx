import React from "react";
import { Text } from "react-native";
import { render } from "../core";
import { CardBaloon } from "../../src/core/components";

test("render of CardBaloon", async () => {
  render(
    <CardBaloon direction="left">
      <Text>CardBaloon</Text>
    </CardBaloon>
  );
});