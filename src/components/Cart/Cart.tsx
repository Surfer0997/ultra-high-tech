import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Form1 } from '../Forms/Form1/Form1';
import { Form2 } from '../Forms/Form2/Form2';
import { Form3 } from '../Forms/Form3/Form3';
import { Modal } from '../UI/Modal';
import { CartContent } from './CartContent';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const { cartIsVisible } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();


  return (
    <>
      {cartIsVisible && (
        <Modal onHideCart={dispatch.bind(null, toggleIsCartVisible())}>
          <CartContent />
          <Form1 />
          <Form2 />
          <Form3 />
        </Modal>
      )}
    </>
  );
};
