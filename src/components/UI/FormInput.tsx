import styles from './FormInput.module.css';
import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  inputConfig: {
    [name: string]: string | boolean | undefined;
  };
  className?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return <input className={styles.inputs} ref={ref} {...props.inputConfig}/>
});
