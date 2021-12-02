import React from 'react';
import { AssetWidgetSampleIcon } from '../../src/assets';
import { Avatar } from "../../src/core/components";
import { render } from "../core";

test('render of Avatar', async () => {

  render(
    <Avatar
      source={AssetWidgetSampleIcon}
      diameter={1}
    />
  );

});