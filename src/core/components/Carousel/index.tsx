import React, { FunctionComponent } from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import { useTheme } from '../../hooks';

export interface CarouselProps {
  length: number,
  currentIndex: number
}

export const Carousel: FunctionComponent<CarouselProps> = ({ length, currentIndex }) => {
  const [theme] = useTheme();

  return (
    <AnimatedDotsCarousel
      length={length}
      currentIndex={currentIndex}
      maxIndicators={length}
      activeIndicatorConfig={{
        color: theme.blue,
        margin: 3,
        opacity: 1,
        size: 12
      }}
      inactiveIndicatorConfig={{
        color: theme.gray,
        margin: 3,
        opacity: 0.5,
        size: 12
      }}
      decreasingDots={[
        {
          config: { color: theme.gray, margin: 3, opacity: 1, size: 12 },
          quantity: 1
        },
        {
          config: { color: theme.gray, margin: 3, opacity: 1, size: 12 },
          quantity: 1
        },
      ]}
    />
  );
}
