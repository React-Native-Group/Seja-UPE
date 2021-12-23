import React from "react";
import { AssetWidgetSampleIcon } from "../../src/assets";
import { Avatar } from "../../src/core/components";
import { act, create } from "../core";

test("render of Avatar", () => {
  act(() => {
    create(
      <Avatar
        source={AssetWidgetSampleIcon}
        diameter={1}
      />
    );
  });
});