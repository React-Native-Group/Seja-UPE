import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container, Label, Toggle } from './styles';

export interface ToggleGroupProps {
  onChange?: (e: 'ssa' | 'sisu') => void;
  initialValue?: 'ssa' | 'sisu';
}

export const ToggleGroup: FunctionComponent<ToggleGroupProps> = ({ onChange, initialValue }) => {
  const [ selected, setSelected ] = useState<'ssa' | 'sisu'>(initialValue ?? 'ssa');

  useEffect(() => {
    if (!!onChange) onChange(selected);
  }, []);

  function onChangeSelection(e: 'ssa' | 'sisu'){
    if (!!onChange) onChange(e);
    setSelected(e);
  }

  return (
    <Container>
      <Toggle isActive={selected == 'ssa'} onPress={() => onChangeSelection('ssa')}>
        <Label isActive={selected == 'ssa'}>SSA</Label>
      </Toggle>
      <Toggle isActive={selected == 'sisu'} onPress={() => onChangeSelection('sisu')}>
        <Label isActive={selected == 'sisu'}>SISU</Label>
      </Toggle>
    </Container>
  );
}
