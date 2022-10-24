import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';
import { useCookies } from 'react-cookie';
import { Theme } from '../../UI/ThemeSwitch';

export const AboutUs = () => {
  const [cookies, setCookie] = useCookies();
  return (
    <article className={styles['about-us']}>
      <h2>Two words about <span className={styles.highlight} style={ cookies.theme === Theme.white ? {color: 'black'} : {}}>InsaneStore</span></h2>
      <p>
        We are a young, ultra-modern, multi-paradigm, just-in-time compiled,
        single-threaded, non-blocking event loop concurrency modeling, dynamically
        typed, high-level, garbage-collected, interpreted, with first-class functions, prototype-based
        object-oriented team that has no idea what it does or how it works. 💙💛
      </p>
      <Link to='/shop' className={styles.explore} style={ cookies.theme === 'white' ? {color: 'black'} : {}}>Explore</Link>
    </article>
  );
};
