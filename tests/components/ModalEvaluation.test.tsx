import React from "react";
import { act, fireEvent, render } from "../core";
import { ModalEvaluation } from "../../src/core/components";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

test("render of ModalEvaluation", () => {
  render(
    <ModalEvaluation 
      type={"rating"}
      isOpen={false} 
      onResult={() => {}}
    />
  )
})

test("testing like and dislike in ModalEvaluation", () => {
  
  const { getByTestId } = render(
    <ModalEvaluation 
      type={"popularity"}
      isOpen={false} 
      onResult={() => {}}
    />
  );
  act(()=>{
    fireEvent(getByTestId("like.clickable"), "onPress", { 
      nativeEvent: { 
        locationX: 190,
        locationY: 300
      }
    });
    
    fireEvent(getByTestId("dislike.clickable"), "onPress", { 
      nativeEvent: { 
        locationX: 210,
        locationY: 300
      }
    });
  })
});

test("testing rating in ModalEvaluation", async () => {
  const { getByTestId } = render(
    <ModalEvaluation 
      type={"rating"}
      isOpen={false} 
      onResult={() => {}}
    />
  );
  
  act(() => {
    fireEvent(getByTestId("rating.clickable4"), "onPress", { 
      nativeEvent: { 
        locationX: 200,
        locationY: 300
      }
    });
  })
});