import React from 'react';
import { PageLayout, Spacer } from '../../src/core/components';
import { render } from '../core';

test('render of PageLayout', async () => {
  render(
    <PageLayout
      canGoBack
      showFab
      showSpinner 
    >
      <Spacer/>
    </PageLayout>
  );
});