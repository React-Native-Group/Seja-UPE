import React from "react";
import { render } from "../core";
import { Select } from "../../src/core/components";

test('render of Select', () => {
  render(
    <Select 
      data={[]}
      placeholder={"Testing..."} 
      onSelect={() => {}}    
    />
  );
});