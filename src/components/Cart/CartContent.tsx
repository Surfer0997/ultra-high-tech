import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import { toggleIsCartVisible } from './cartSlice';

interface CartContentProps {
  onShowForm: ()=>void
}

export const CartContent = ({onShowForm}:CartContentProps) => {
    const {cart, total} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
  
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
  return (
    <>
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
        {cart.length>0 && <button className={styles.button} onClick={onShowForm}>Next step</button>}
      </div>
    </>
  );
};
