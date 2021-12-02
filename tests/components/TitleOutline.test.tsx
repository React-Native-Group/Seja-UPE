import React from "react";
import { render } from "../core";
import { TitleOutline } from "../../src/core/components";
import { ImageSourcePropType } from 'react-native';
import { AssetWidgetCampusIcon } from "../../src/assets";

test('render of Title', async () => {
  render(
    <TitleOutline
      title="Title"
      icon={AssetWidgetCampusIcon}
      bold
    />
  );
})