import React from 'react';
import { Text } from 'react-native';
import { CardBaloon } from '../../src/core/components';
import { render } from "../core";

test('render of CardBaloon', async () => {

  render(
    <CardBaloon direction= "left">
      <Text>CardBaloon</Text>
    </CardBaloon>
  );

});