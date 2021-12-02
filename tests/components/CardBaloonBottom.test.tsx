import React from 'react';
import { CardBaloonBottom, Paragraph } from '../../src/core/components';
import { render } from "../core";

test('render of CardBaloonBottom', async () => {

  render(
    <CardBaloonBottom>
      <Paragraph
        paddingLeft="8px"
        paddingRight="8px"
        paddingTop="8px"
        paddingBottom="8px"
        justify
      >
        Mensagem informativa do robô da UPE.
      </Paragraph>
    </CardBaloonBottom>
  );

});