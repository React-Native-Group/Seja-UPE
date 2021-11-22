import React, { FunctionComponent } from 'react';
import ModalSelector from 'react-native-modal-selector';
import { useTheme } from '../../hooks';

export interface SelectOption {
  key: number;
  label: string;
}

export interface SelectProps {
  data: SelectOption[];
  placeholder: string;
  onSelect: (e: SelectOption) => void;
}

export const Select: FunctionComponent<SelectProps> = ({ data, placeholder, onSelect }) => {
  const [theme] = useTheme();

  const section = { key: -1, label: placeholder, section: true };

  function onChangeSelection(event: any){
    let [found] = data.filter((value) => value.key === event?.key);
    if (!!found)
      onSelect(found);
  }

  return (
    <ModalSelector
      data={[section, ...data]}
      selectStyle={{backgroundColor: theme.white}}
      selectTextStyle={{color: theme.blue}}
      optionTextStyle={{color: theme.blue}}
      cancelTextStyle={{color: theme.red}}
      cancelText="Cancelar"
      initValueTextStyle={{color: '#6d6d6d'}}
      initValue={placeholder}
      onChange={onChangeSelection} 
    />
  );
}
