import React from "react";
import { render } from "../core";
import { Select } from "../../src/core/components";

test('render of Select', async () => {
  render(
    <Select 
      data={[]}
      placeholder={"Testing..."} 
      optional={true}
      onSelect={() => {}}    
    />
  );
});