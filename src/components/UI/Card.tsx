import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
