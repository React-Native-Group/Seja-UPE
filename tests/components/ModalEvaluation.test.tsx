import React from "react";
import { act, fireEvent, render } from "../core";
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

test("check if like button works in ModalEvaluation", async () => {
  
  const { getByTestId } = render(
    <ModalEvaluation
      type="popularity"
      isOpen={true}
      onResult={() => { }}
    />
  );

  await act(async () => {
    fireEvent.press(getByTestId("modalEvaluation.like"));
  });

});

test("check if dislike button works in ModalEvaluation", async () => {
  
  const { getByTestId } = render(
    <ModalEvaluation
      type="popularity"
      isOpen={true}
      onResult={() => { }}
    />
  );

  await act(async () => {
    fireEvent.press(getByTestId("modalEvaluation.dislike"));
  });

});

test("check if rating button works in ModalEvaluation", async () => {
  
  const { getByTestId } = render(
    <ModalEvaluation
      type="rating"
      isOpen={true}
      onResult={() => { }}
    />
  );

  await act(async () => {
    fireEvent.press(getByTestId("modalEvaluation.star4"));
  });

});