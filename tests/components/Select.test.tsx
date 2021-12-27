import React from "react";
import { fireEvent, render } from "../core";
import { Select } from "../../src/core/components";
import { create } from "react-test-renderer";
import ModalSelector from "react-native-modal-selector";

test("render of Select", () => {
  render(
    <Select
      data={[{ key: 1, label: "Hello" }, { key: 2, label: "Goodbye" }]}
      placeholder={"Testing..."}
      optional={true}
      onSelect={() => { }}
    />
  );
});

test("render of Select non-optional", () => {
  render(
    <Select
      data={[{ key: 1, label: "Hello" }, { key: 2, label: "Goodbye" }]}
      placeholder={"Testing..."}
      onSelect={() => { }}
    />
  );
});

test("select option test", () => {
  function MockedSelect() {
    return (
      <Select
        data={[{ key: 1, label: "Hello" }, { key: 2, label: "Goodbye" }]}
        placeholder={"Testing..."}
        optional={true}
        onSelect={() => { }}
      />
    );
  };

  const tree = create(<MockedSelect />);
  const treeRoot = tree.root;
  fireEvent(treeRoot.findByType(ModalSelector), "change");
});