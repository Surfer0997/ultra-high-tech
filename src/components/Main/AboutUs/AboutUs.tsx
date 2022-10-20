import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

export const AboutUs = () => {
  return (
    <article className={styles['about-us']}>
      <h2>Two words about <span className={styles.highlight}>InsaneStore</span></h2>
      <p>
        We are a young, ultra-modern, multi-paradigm, just-in-time compiled,
        single-threaded, non-blocking event loop concurrency modeling, dynamically
        typed, high-level, garbage-collected, interpreted, with first-class functions, prototype-based
        object-oriented team that has no idea what it does or how it works. 💙💛
      </p>
      <Link to='/shop' className={styles.explore}>Explore</Link>
    </article>
  );
};
