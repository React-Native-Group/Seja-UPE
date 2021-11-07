import React, { FunctionComponent } from 'react';
import { LineChart } from "react-native-chart-kit";
import { Container } from './styles';

export interface ChartProps {
  height: number;
  width: number;
  legend: string;
  labels: string[];
  data: number[];
}

export const Chart: FunctionComponent<ChartProps> = ({ height, width, legend, labels, data}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        color: () => `#ed3238`,
        strokeWidth: 2
      }
    ],
    legend: [legend] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#f3ecec",
    backgroundGradientTo: "#ffffff",
    color: () => `#dfdfdf`,
    labelColor: () => `#324A76`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#830408"
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
