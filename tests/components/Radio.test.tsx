import React from "react";
import { Radio, useRadioGroup } from "../../src/core/components";
import { act, fireEvent, render } from "../core";
import { renderHook } from "@testing-library/react-hooks"


test("render of Radio", () => {
  const {result} = renderHook(() => useRadioGroup(1));
  const [group, setGroup] = result.current;

  render(
    <Radio
      reference={group[0]}
      group={group}
      onPress={() => { }}
      onHandle={setGroup}
    />
  );

});

test("press Radio", () => {
  const {result} = renderHook(() => useRadioGroup(1));
  const [group, setGroup, clearChoices] = result.current;
  
  const { getByTestId } = render(
    <Radio
      reference={group[0]}
      group={group}
      onPress={() => {}}
      onHandle={setGroup}
    />
  );

  act(() => {
    fireEvent(getByTestId("radio.container"), "onPress", {
      nativeEvent: {
        locationX: 100,
        locationY: 100
      }
    });
    clearChoices();
  });

});