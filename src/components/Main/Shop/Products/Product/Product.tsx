import { Card } from '../../../../UI/Card';
import styles from './Product.module.css';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../../Cart/cartSlice';

interface ProductProps {
  title: string;
  author: string;
  imageSrc: string;
}

export const Product = ({ title, author, imageSrc }: ProductProps) => {
  const input = createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const addItemHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addCartItem(input.current?.value));
  };

  return (
    <Card className={styles.product}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <span>by {author}</span>
      <form onSubmit={addItemHandler}>
        <label htmlFor="amount">Enter amount:</label>
        <input
          type="number"
          ref={input}
          min="1"
          step="1"
          defaultValue="1"
        />
        <button type="submit">Add to cart</button>
      </form>
    </Card>
  );
};
