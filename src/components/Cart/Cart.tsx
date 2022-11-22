import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Forms from '../Forms/Forms';
import { Modal } from '../UI/Modal';
import { CartContent } from './CartContent';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const { cartIsVisible } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const showFormHandler = () => {
    setIsFormVisible(true);
  }
  const hideCartHandler = () => {
    dispatch.call(null, toggleIsCartVisible());
    setIsFormVisible(false);
  }
  return (
    <>
      {cartIsVisible && (
        <Modal onHideCart={hideCartHandler}>
        {isFormVisible ? <Forms/> : <CartContent onShowForm={showFormHandler}/>}
          
        </Modal>
      )}
    </>
  );
};
