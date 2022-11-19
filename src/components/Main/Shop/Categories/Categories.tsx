import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { Button } from '../../../UI/Button';
import { getBooks } from '../Products/productsSlice';
import styles from './Categories.module.css';

export const Categories = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const input = useRef<HTMLInputElement | null>(null);

  const loadCategory = (category: string) => () => {
    if (!isDisabled) {
      setIsDisabled(true);
      dispatch(getBooks({category}));
      setTimeout(() => setIsDisabled(false), 800);
    }
  };

  useEffect(() => {
    loadCategory('detective')();
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.current?.value) {
      loadCategory(input.current?.value)();
    }
  };

  return (
    <section className={styles.categories}>
      <Button clickHandler={loadCategory('cats')}>
        For cats
      </Button>
      <Button clickHandler={loadCategory('dogs')}>
        For dogs
      </Button>
      <Button clickHandler={loadCategory('sport')}>
        For nerds
      </Button>
      <Button clickHandler={loadCategory('program')}>
        For programmers
      </Button>
      <Button clickHandler={loadCategory('chill')}>
        For brogrammers
      </Button>
      <form onSubmit={submitHandler}>
        <input
          ref={input}
          onClick={() => {
            if (input.current?.value) {
              input.current.value = '';
            }
          }}
          type="text"
          placeholder="Own category"
        />
        <input type="submit" hidden />
      </form>
    </section>
  );
};
