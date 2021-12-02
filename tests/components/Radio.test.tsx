import React from "react";
import { Radio, RadioType, useRadioGroup } from "../../src/core/components";
import { RadioContainer } from "../../src/pages/Survey/styles";
import { render } from "../core";
import { renderHook } from '@testing-library/react-hooks'

test('render of Radio', async () => {

  const radio = renderHook(() => useRadioGroup(5));
  const [group, setGroup] = radio.result.current;
  
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