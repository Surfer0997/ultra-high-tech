import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch } from 'react-redux';
import { toggleIsCartVisible } from '../Cart/cartSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../helpers/showToast';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const BURGER_STYLE = {
  bmBurgerButton: {
    position: 'relative',
    width: '2.5rem',
    height: '30px',
    right: '.6rem',
    marginTop: '4px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0px',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
  },
  bmItemList: {
    padding: '0.8em',
  },
  bmOverlay: {
    left: '0',
    top: '0',
  },
};

export const Header = () => {
  const [cookies] = useCookies();
  const cartItemCount = useSelector((state: RootState) => state.cart).cart.reduce((acc, item) => acc + item.amount, 0);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  useEffect(() => {
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItemCount]);
  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <nav className={styles.nav}>
        <Link to="/" className={styles.header}>
          <h2>InsaneStore</h2>
        </Link>
        <Link to="/about" className={styles['nav-link']}>
          About us
        </Link>
        <Link to="/shop" className={styles['nav-link']}>
          Our products
        </Link>
        <Link to="/partners" className={styles['nav-link']}>
          To partners
        </Link>
        <a href="#footer" className={styles['nav-link']}>
          Contacts
        </a>
        <a href="#signin" className={styles['nav-link']} onClick={() => showToast('WARNING', 'Not available yet :(')}>
          Sign In
        </a>
        <a href="#cart" className={`${styles['nav-link']} `} onClick={dispatch.bind(null, toggleIsCartVisible())}>
          Cart 🛒
          <span
            className={`${styles['nav-cart__span']} ${isButtonAnimated ? styles.bump : ''}`}
            style={cookies.theme === 'white' ? { color: 'black' } : {}}
          >
            {cartItemCount}
          </span>
        </a>
      </nav>

      <nav className={styles['nav-mobile']}>
        <Link to="/" className={styles.header}>
          <h2>InsaneStore</h2>
        </Link>
        <div className={styles.block}>
          <a
            href="#cart"
            className={`${styles.cart} ${isButtonAnimated ? styles.bump : ''}`}
            onClick={dispatch.bind(null, toggleIsCartVisible())}
          >
            Cart 🛒{' '}
            <span
              className={`${styles['nav-cart__span']} ${isButtonAnimated ? styles.bump : ''}`}
              style={cookies.theme === 'white' ? { color: 'black' } : {}}
            >
              {' '}
              {cartItemCount}
            </span>
          </a>
          <Menu styles={BURGER_STYLE} right>
            <Link to="/about" className={styles['nav-link']}>
              About us
            </Link>
            <Link to="/shop" className={styles['nav-link']}>
              Our products
            </Link>
            <Link to="/partners" className={styles['nav-link']}>
              To partners
            </Link>
            <a href="#footer" className={styles['nav-link']}>
              Contacts
            </a>
            <a href="#signin" className={styles['nav-link']}>
              Sign In
            </a>
          </Menu>
        </div>
      </nav>
    </>
  );
};
