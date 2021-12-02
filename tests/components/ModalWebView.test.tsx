import React from 'react';
import { ModalWebView } from '../../src/core/components';
import { render } from "../core";

test('render of ModalWebView', async () => {

  render(
    <ModalWebView link={''} isOpen={false} onClose={function (): void {} } />
  );

});