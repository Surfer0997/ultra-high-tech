import styles from './Background.module.css';
import { useGetBackgroundAnimItems } from './useGetBackgroundAnimitems';

export const Background = () => {
  const spans = useGetBackgroundAnimItems();
  return <div className={styles['background-animation']}>{spans}</div>;
};
