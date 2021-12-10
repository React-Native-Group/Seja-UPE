import React, { FunctionComponent, useState } from 'react';
import ModalSelector from 'react-native-modal-selector';
import { useTheme } from '../../hooks';

export interface SelectOption {
  key: number;
  label: string;
}

export interface SelectProps {
  data: SelectOption[];
  placeholder: string;
  optional?: boolean;
  onSelect: (e: SelectOption) => void;
}

export const Select: FunctionComponent<SelectProps> = ({ data, placeholder, optional = false, onSelect }) => {
  const [theme] = useTheme();

  const [selectedKey, setSelectedKey] = useState<React.Key | undefined>();

  const section = { key: -1, label: placeholder, section: true };

  function onChangeSelection(event: any){
    let [found] = data.filter((value) => value.key === event?.key);
    if (!!found){
      onSelect(found);
      setSelectedKey(found.key);
    }
  }

  return (
    <ModalSelector
      data={[section, ...data]}
      selectedKey={selectedKey}
      selectStyle={{backgroundColor: theme.white}}
      selectTextStyle={{color: theme.blue}}
      optionTextStyle={{color: theme.blue}}
      cancelTextStyle={{color: theme.red}}
      cancelText="Cancelar"
      initValueTextStyle={{color: '#6d6d6d'}}
      initValue={placeholder + (optional ? ' (Opcional)' : '')}
      onChange={onChangeSelection} 
    />
  );
}
