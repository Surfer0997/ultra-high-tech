import { Card } from '../../../../UI/Card';
import styles from './Product.module.css';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../../../Cart/cartSlice';

interface ProductProps {
  id: number;
  title: string;
  author: string;
  imageSrc: string;
}

export const Product = ({ id, title, author, imageSrc }: ProductProps) => {
  const input = createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const addItemHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      updateCartItem({
        id: id,
        title: title,
        price: price,
        amount: Number(input.current?.value),
      })
    );
    if (input.current?.value) {
      input.current.value = '1';
    }
  };

  const price =
    (title?.toString().length + Number((( author ? author?.toString().length * 2 : 0 + title?.toString().length) / 100))).toFixed(2);

  return (
    <Card className={styles.product}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <span className={styles.author}>by {author}</span>
      <p>only for {price}</p>
      <form onSubmit={addItemHandler}>
        <label htmlFor="amount">Enter amount:</label>
        <section className={styles['input-wrap']}>
          <input type="number" ref={input} min="1" step="1" defaultValue="1" />
          <button type="submit">Add to cart</button>
        </section>
      </form>
    </Card>
  );
};
