import { useEffect, useRef, useState } from "react";

export const LoadingIndicator = () => {

const colorAccentRef = useRef(getComputedStyle(document.documentElement)
  .getPropertyValue('--color-blue')).current;
  
const [colorAccent, setColorAccent] = useState(getComputedStyle(document.documentElement)
.getPropertyValue('--color-blue'));

useEffect(()=>{
  setColorAccent(getComputedStyle(document.documentElement)
  .getPropertyValue('--color-blue'))
}, [colorAccentRef])

  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={colorAccent}
        strokeWidth="3"
        r="40"
        strokeDasharray="188.49555921538757 64.83185307179586"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.6134969325153374s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};
