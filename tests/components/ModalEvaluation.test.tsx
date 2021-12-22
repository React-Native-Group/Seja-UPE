import React from 'react';
import { ModalEvaluation } from '../../src/core/components';
import { fireEvent, render } from "../core";

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

test('press ModalEvaluation', async () => {
  
  const { getByTestId } = render(
    <ModalEvaluation 
      type={'popularity'}
      isOpen={false} 
      onResult={() => {}}
    >
      
    </ModalEvaluation>
  );

  fireEvent(getByTestId('modalevaluation.clickable'), 'onPress', { 
    nativeEvent: { 
      locationX: 200,
      locationY: 300
    }
  });

});