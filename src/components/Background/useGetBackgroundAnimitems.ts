import React from "react";
import { v4 as uuid } from 'uuid';

const stripeAmount = Math.ceil(window.innerWidth / 5);

export const useGetBackgroundAnimItems = () => {
  const spans:React.ReactNode[] = [];

    for (let i = 0; i < stripeAmount; i++) {
      const width = 0.3 * Math.random() * 5 + 'px';
      const left = Math.floor(Math.random() * window.innerWidth) + 'px';
      const animationDelay = Math.random() * -20 + 's';
      const animationDuration = 4 + Math.random() * 5 + 's';
      spans[i] = React.createElement(
        'span',
        {
          style: {
            width: width,
            left: left,
            animationDelay: animationDelay,
            animationDuration: animationDuration,
          },
          key: uuid(),
        },
        null
      );
    }

    return spans;
}