import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Modal } from '../UI/Modal';
import styles from './Cart.module.css';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.cartIsVisible && (
        <Modal onHideCart={dispatch.bind(null, toggleIsCartVisible())}>
          <div>
            {cart.cart.map(item => (
              <p>{item.name}</p>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};
