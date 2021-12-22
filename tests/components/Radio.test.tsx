import React from "react";
import { Radio, useRadioGroup } from "../../src/core/components";
import { RadioContainer } from "../../src/pages/Survey/styles";
import { fireEvent, render } from "../core";
import { renderHook } from '@testing-library/react-hooks'

const radio = renderHook(() => useRadioGroup(5));
const [group, setGroup] = radio.result.current;
test('render of Radio', async () => {
  
  render(
    <RadioContainer>
      <Radio 
        reference={group[1]}
        group={group} 
        onPress={() => {}} 
        onHandle={setGroup}      
        />
    </RadioContainer>
  
  );
});

test('press Radio', async () => {
  
  const { getByTestId } = render(
    <RadioContainer>
      <Radio 
        reference={group[1]}
        group={group} 
        onPress={() => {}} 
        onHandle={setGroup}      
        />
    </RadioContainer>
  );

  fireEvent(getByTestId('radio.container'), 'onPress', { 
    nativeEvent: { 
      locationX: 100, 
      locationY: 100 
    }
  });

});