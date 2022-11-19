import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartItem, updateCartItem } from './cartSlice';

interface CartItemProps {
  item: cartItem;
  onRemove: (id: number) => void;
  onAdd: (item: cartItem) => void;
}

const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch();

  const { price, amount, title, id } = props.item;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={dispatch.bind(null, updateCartItem({ ...props.item, amount: 1 }))}>+</button>
        <button onClick={dispatch.bind(null, updateCartItem({ ...props.item, amount: -1 }))}>−</button>
      </div>
    </li>
  );
};

export default CartItem;
