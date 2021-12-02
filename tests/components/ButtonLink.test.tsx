import React from 'react';
import { AssetWidgetSampleIcon } from '../../src/assets';
import { ButtonLink } from '../../src/core/components';
import { render } from "../core";

test('render of ButtonLink', async () => {

  render(
    <ButtonLink 
      iconName={AssetWidgetSampleIcon}
      text="ButtonLink"
    />
  );

});