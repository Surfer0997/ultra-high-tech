import { isPropertySignature } from 'typescript';
import styles from './Input.module.css';
import React from 'react'

interface InputProps extends React.ComponentPropsWithoutRef<'input'>{
    label:string;
    inputConfig: {
        [name:string]: string | boolean | undefined;
    }
    onChange?: (event : React.ChangeEvent<HTMLInputElement>)=>void;
    className?:string;
}

export const Input= React.forwardRef<HTMLInputElement, InputProps>((props:InputProps, ref) => {
    return <div className={`${styles.input}`}>
        <label htmlFor={props.inputConfig.id+''}>{props.label}</label>
        <input className={props.className} ref={ref} {...props.inputConfig} onChange={props.onChange}/>
    </div>
})