import React from "react";
import { render } from "../core";
import { ModalEvaluation } from "../../src/core/components";

test("render of ModalEvaluation", () => {
  render(
    <ModalEvaluation
      type={"rating"}
      isOpen={true}
      onResult={() => { }}
    />
  )
});

// test("check if like button works in ModalEvaluation", async () => {
  
//   const { getByTestId } = render(
//     <ModalEvaluation
//       type="popularity"
//       isOpen={true}
//       onResult={() => { }}
//     />
//   );

//   act(() => {
//     fireEvent.press(getByTestId("teste"));
//   });

// });
