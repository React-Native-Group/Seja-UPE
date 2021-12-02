import React from "react";
import { Badge } from "../../src/core/components";
import { render } from "../core";

test('render of Badge', async () => {

  render(
    <Badge
      bgColor= 'white'
      color= 'black'
      numberOfLines= {1}
      borderRadius= '10px'
      width= '100px'
      maxWidth= '100px'
      animated= {false}
      bold= {false}
      fontSize= '20px'
      hasShadow= {false}
      text= 'text'
    />
  );

});