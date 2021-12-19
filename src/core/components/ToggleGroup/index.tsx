import React, { FunctionComponent, useEffect, useState } from "react";
import { useTheme } from "../../hooks";
import { Container, Label, Toggle } from "./styles";

export interface ToggleGroupProps {
  onChange?: (e: "ssa" | "sisu") => void;
  initialValue?: "ssa" | "sisu";
}

export const ToggleGroup: FunctionComponent<ToggleGroupProps> = ({ onChange, initialValue }) => {
  const [ selected, setSelected ] = useState<"ssa" | "sisu">(initialValue ?? "ssa");
  const [ theme ] = useTheme();

  useEffect(() => {
    if (!!onChange) onChange(selected);
  }, []);

  function onChangeSelection(e: "ssa" | "sisu"){
    if (!!onChange) onChange(e);
    setSelected(e);
  }

  return (
    <Container {...theme}>
      <Toggle isActive={selected == "ssa"} onPress={() => onChangeSelection("ssa")} {...theme}>
        <Label isActive={selected == "ssa"} {...theme}>SSA</Label>
      </Toggle>
      <Toggle isActive={selected == "sisu"} onPress={() => onChangeSelection("sisu")} {...theme}>
        <Label isActive={selected == "sisu"} {...theme}>SISU</Label>
      </Toggle>
    </Container>
  );
}
