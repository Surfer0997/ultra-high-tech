import { Card } from '../../../../UI/Card';
import styles from './Product.module.css';
import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../../../Cart/cartSlice';
import { showToast } from '../../../../../helpers/showToast';
import { useCookies } from 'react-cookie';
import { resetForm } from '../../../../Forms/orderFormSlice';

interface ProductProps {
  id: number;
  title: string;
  author: string;
  imageSrc: string;
}

export const Product = ({ id, title, author, imageSrc }: ProductProps) => {
  const input = createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const [cookies] = useCookies();

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
    dispatch(resetForm());
    if (input.current?.value) {
      input.current.value = '1';
    }
    showToast('INFO', 'Added to cart!');
  };

  const price =
    (title?.toString().length + Number((( author ? author?.toString().length * 2 : 0 + title?.toString().length) / 100))).toFixed(2);

  return (
    <Card className={styles.product}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <span className={styles.author}>by {author}</span>
      <p className={styles.priceLine}>only for&nbsp;&nbsp;<span className={`${styles.highlight} ${cookies.theme === 'white' ? styles.highlightWhiteFix : ''}`}>&nbsp;&nbsp;{price}&nbsp;&nbsp;</span></p>
      <form onSubmit={addItemHandler}>
        <section className={styles['input-wrap']}>
          <input type="number" ref={input} min="1" step="1" defaultValue="1" />
          <button type="submit">Add to cart</button>
        </section>
      </form>
    </Card>
  );
};
