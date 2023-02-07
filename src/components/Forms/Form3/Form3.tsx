import styles from '../Form1/Form1.module.css';
import CartItem from '../../Cart/CartItem';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { sendThirdForm, submitOrder } from '../orderFormSlice';

export function Form3() {
  const {cart} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cart.map(item => (
                <CartItem
                key={item.id}
                item={item}
              />
      ))}
    </ul>
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitOrder());
  }

  return (
    <form className={styles.form1} onSubmit={handleSubmit}>
      <h2>Confirm the order</h2>
      {cartItems}
     
      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Confirm" />
    </form>
  );
}
