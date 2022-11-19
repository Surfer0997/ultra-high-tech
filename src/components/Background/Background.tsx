import { useEffect, useState } from 'react';
import styles from './Background.module.css';
import { useGetBackgroundAnimItems } from './useGetBackgroundAnimItems';

export const Background = () => {
  const [windowSize, setWindowSize] = useState<number>();
  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      setWindowSize(Math.random()); // force update component
    })
  }, [])
  const spans = useGetBackgroundAnimItems();

  return <div className={styles['background-animation']}>{spans}</div>;
};
