import React from 'react';
import { ModalEvaluation } from '../../src/core/components';
import { render } from "../core";

test('render of ModalEvaluation', async () => {
  render(
    <ModalEvaluation 
      type={'rating'}
      isOpen={false} 
      onResult={() => {}}
    >
      
    </ModalEvaluation>
  )
})