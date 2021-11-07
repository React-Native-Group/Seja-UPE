import React, { FunctionComponent } from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

export interface CarouselProps {
  length: number,
  currentIndex: number
}

export const Carousel: FunctionComponent<CarouselProps> = ({ length, currentIndex }) => {
  return (
    <AnimatedDotsCarousel
      length={length}
      currentIndex={currentIndex}
      maxIndicators={length}
      activeIndicatorConfig={{
        color: '#324A76',
        margin: 3,
        opacity: 1,
        size: 12
      }}
      inactiveIndicatorConfig={{
        color: '#C4C4C4',
        margin: 3,
        opacity: 0.5,
        size: 12
      }}
      decreasingDots={[
        {
          config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
          quantity: 1
        },
        {
          config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
          quantity: 1
        },
      ]}
    />
  );
}
