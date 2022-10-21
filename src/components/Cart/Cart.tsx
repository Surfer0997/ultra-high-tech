import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cart.cart.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </ul>
  );

  return (
    <>
      {cart.cartIsVisible && (
        <Modal onHideCart={dispatch.bind(null, toggleIsCartVisible())}>
          <div className={styles.cart}>
            <div className={styles['cart-header']}>
              <h3>Cart</h3>
              <button className={styles['❌']} onClick={dispatch.bind(null, toggleIsCartVisible())}></button>
            </div>
          </div>
          {cartItems}
        </Modal>
      )}
    </>
  );
};
