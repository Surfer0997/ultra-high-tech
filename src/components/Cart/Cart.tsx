import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderForms from '../Forms/OrderForms';
import { setFormVisibility } from '../Forms/orderFormSlice';
import { Modal } from '../UI/Modal';
import { CartContent } from './CartContent';
import { toggleIsCartVisible } from './cartSlice';

export const Cart = () => {
  const { cartIsVisible } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const {isOrderFormVisible} = useSelector((state:RootState)=> state.orderForm);

  const showFormHandler = () => {
    dispatch(setFormVisibility(true));
  }
  const hideCartHandler = () => {
    dispatch.call(null, toggleIsCartVisible());
    dispatch(setFormVisibility(false));
  }
  return (
    <>
      {cartIsVisible && (
        <Modal onHideCart={hideCartHandler}>
        {isOrderFormVisible ? <OrderForms/> : <CartContent onShowForm={showFormHandler}/>}
          
        </Modal>
      )}
    </>
  );
};
