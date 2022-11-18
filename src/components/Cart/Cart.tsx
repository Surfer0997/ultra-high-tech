import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Form1 } from '../Forms/Form1/Form1';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const {cart, total, cartIsVisible} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cart.map(item => (
                <CartItem
                key={item.id}
                item={item}
                onAdd={console.log}
                onRemove={console.log}
              />
      ))}
    </ul>
  );
        const hasItems = true;

  return (
    <>
      {cartIsVisible && (
        <Modal onHideCart={dispatch.bind(null, toggleIsCartVisible())}>
          <div className={styles.cart}>
            <div className={styles['cart-header']}>
              <h3>Your cart:</h3>
              <button className={styles['❌']} onClick={dispatch.bind(null, toggleIsCartVisible())}></button>
            </div>
          </div>
          {cartItems}

          <div className={styles.total}>
        <span>Total</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={dispatch.bind(null, toggleIsCartVisible())}>
          Close
        </button>
        {/* {hasItems && <button className={styles.button} onClick={props.onOpenOrderForm}>Далi</button>} */}
        {hasItems && <button className={styles.button}>Next step</button>}
      </div>


        <Form1/>
        <Form1/>
        <Form1/>
        <Form1/>
        
        </Modal>
      )}
    </>
  );
};
