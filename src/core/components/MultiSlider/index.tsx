import React, { FunctionComponent, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import Slider from '@ptomasroos/react-native-multi-slider';

import { Render } from '../Render';
import { useTheme } from '../../hooks';
import { Container, Group, Label } from './styles';

export interface MultiSliderValue {
  lowerValue: number;
  higherValue: number;
}

export interface MultiSliderProps {
  onChange?: (e: MultiSliderValue) => void;
  minValue: number;
  maxValue: number;
  minDistance: number;
}

export const MultiSlider: FunctionComponent<MultiSliderProps> = (props) => {
  const { minValue, maxValue } = props;
  const { minDistance, onChange } = props;

  const [ theme ] = useTheme();
  const [ length, setLength ] = useState(0);
  const [ value, setValue ] = useState([minValue, maxValue]);
  const [ scale, setScale ] = useState(0);
  
  const [ leftLabelLength, setLeftLabelLength ] = useState(0);
  const [ rightLabelLength, setRightLabelLength ] = useState(0);

  function onValueChange([lowerValue, higherValue]: number[]) {
    if (!!onChange)
      onChange({lowerValue, higherValue});
    if ((higherValue - lowerValue) >= minDistance){
      setValue([lowerValue, higherValue]);
    }
  }

  function onLayoutChange({ nativeEvent: e }: LayoutChangeEvent){
    setLength(e.layout.width);
    setScale(e.layout.width / (maxValue - minValue));
  }

  function onLabelLayoutChange(side: 'left' | 'right', { nativeEvent: e }: LayoutChangeEvent){
    if (side == 'left') setLeftLabelLength(e.layout.width);
    if (side == 'right') setRightLabelLength(e.layout.width);
  }

  return (
    <Container onLayout={onLayoutChange}>
      <Render if={length > 0}>
        <Slider
          snapped
          min={minValue}
          max={maxValue}
          sliderLength={length}
          values={[value[0], value[1]]}
          onValuesChange={onValueChange}
          minMarkerOverlapDistance={minDistance * scale}
          selectedStyle={{ backgroundColor: theme.blue }}
          markerStyle={{ backgroundColor: theme.blue }}
        />
        <Group>
          <Label 
            {...theme}
            onLayout={(e) => onLabelLayoutChange('left', e)} 
            offset={value[0] * scale - (leftLabelLength / 2)}
          >
            {value[0]}
          </Label>
          <Label 
            {...theme}
            onLayout={(e) => onLabelLayoutChange('right', e)} 
            offset={value[1] * scale - (rightLabelLength / 2)}
          >
            {value[1]}
          </Label>
        </Group>
      </Render>
    </Container>
  );
}
