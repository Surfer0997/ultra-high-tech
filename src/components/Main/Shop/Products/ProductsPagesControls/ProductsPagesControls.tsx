import styles from './ProductsPagesControls.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { LoadingStatus } from '../../../../../types/types';
import { getBooks } from '../productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export const ProductsPagesControls = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { status, nextPage, previousPage } = useSelector((state: RootState) => state.products);

  const loadPage = (page: string) => () => {
    if (!isDisabled) {
      setIsDisabled(true);
      dispatch(getBooks({ page }));
      setTimeout(() => setIsDisabled(false), 800);
    }
  };

  const content =
    status === LoadingStatus.success ? (
      <div className={styles['controls']}>
        {previousPage ? (
          <button onClick={loadPage(previousPage)}>
            <span className={styles.buttonSpan}>
              <FontAwesomeIcon icon={solid('arrow-left')} />
              Prev
            </span>
          </button>
        ) : null}
        {nextPage ? (
          <button onClick={loadPage(nextPage)}>
            <span className={styles.buttonSpan}>
              Next
              <FontAwesomeIcon icon={solid('arrow-right')} />
            </span>
          </button>
        ) : null}
      </div>
    ) : null;
  return <>{content}</>;
};
