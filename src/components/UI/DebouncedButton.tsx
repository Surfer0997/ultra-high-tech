import { memo, useState } from 'react';

interface DebouncedButtonProps {
  children: string;
  clickHandler?: (arg?:any) => void;
}

export const DebouncedButton = (props: DebouncedButtonProps) => {
    console.log('rerender');
  const clickHandler = () => {
      if (props.clickHandler) props.clickHandler();
  };

  return (
    <button onClick={props.clickHandler ? clickHandler : undefined}>
      {props.children}
    </button>
  );
};
