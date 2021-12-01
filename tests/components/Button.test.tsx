import React from 'react';
import { Button } from '../../src/core/components';
import { fireEvent, render } from "../core";

// test('examples of some things', async () => {
//   const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);
//   const person = 'Ada Lovelace';

//   const input = getByTestId('example.input');
//   const button = getByText('Imprimir nome');

//   fireEvent.changeText(input, person);
//   fireEvent.press(button);

//   await waitFor(() => expect(queryByTestId('example.username')).toBeTruthy());

//   expect(getByTestId('example.username').props.children).toBe(person);
//   expect(toJSON()).toMatchSnapshot();
// });

test('pressionamento de botão', async () => {

  render(
    <Button 
      text="Botão" 
      bgColor="blue" 
      color="white"
    />
  );

});
