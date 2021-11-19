import React, { FunctionComponent, useRef, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useTheme } from '../../hooks';
import { Container } from './styles';

export interface ChartProps {
  legend: string;
  labels: string[];
  data: number[];
}

export const Chart: FunctionComponent<ChartProps> = ({ legend, labels, data}) => {
  const [theme] = useTheme();
  const [size, setSize] = useState<LayoutRectangle>({ height: 200, width: 200, x: 0, y: 0 });
  const isLayoutLoaded = useRef(false);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        color: () => theme.chartDatasetColor,
        strokeWidth: 2
      }
    ],
    legend: [legend]
  };

  const chartConfig = {
    backgroundGradientFrom: theme.chartGradientFrom,
    backgroundGradientTo: theme.chartGradientTo,
    color: () => theme.chartColor,
    labelColor: () => theme.chartLabelColor,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: theme.chartDotColor
    } 
  };

  function onLayoutChange({ nativeEvent: e }: LayoutChangeEvent){
    if (!isLayoutLoaded.current){
      setSize(e.layout);
      isLayoutLoaded.current = true;
    }
  }

  return (
    <Container onLayout={onLayoutChange}>
      <LineChart
        bezier 
        data={chartData} 
        width={size.width} 
        height={size.height} 
        chartConfig={chartConfig}
      />
    </Container>
  );
}
