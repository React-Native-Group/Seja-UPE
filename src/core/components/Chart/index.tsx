import React, { FunctionComponent } from 'react';
import { LineChart } from "react-native-chart-kit";
import { useTheme } from '../../hooks';
import { Container } from './styles';

export interface ChartProps {
  height: number;
  width: number;
  legend: string;
  labels: string[];
  data: number[];
}

export const Chart: FunctionComponent<ChartProps> = ({ height, width, legend, labels, data}) => {
  const [theme] = useTheme();
  
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

  return (
    <Container>
      <LineChart
        bezier 
        data={chartData} 
        width={width} 
        height={height} 
        chartConfig={chartConfig}
      />
    </Container>
  );
}
