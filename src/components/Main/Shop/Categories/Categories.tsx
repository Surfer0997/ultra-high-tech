import { AsyncThunkAction } from '@reduxjs/toolkit';
import { memo, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DebouncedButton } from '../../../UI/DebouncedButton';
import { getCategoryBooks } from '../Products/productsSlice';
import styles from './Categories.module.css';

export const Categories = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<any>();
  
  const input = useRef<HTMLInputElement | null>(null);

  const loadCategory = (category: string) => () => {
    if (!isDisabled) {
      setIsDisabled(true);
      dispatch(getCategoryBooks(category));
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
      <DebouncedButton clickHandler={loadCategory('cats')}>
        For cats
      </DebouncedButton>
      <DebouncedButton clickHandler={loadCategory('dogs')}>
        For dogs
      </DebouncedButton>
      <DebouncedButton clickHandler={loadCategory('sport')}>
        For nerds
      </DebouncedButton>
      <DebouncedButton clickHandler={loadCategory('program')}>
        For programmers
      </DebouncedButton>
      <DebouncedButton clickHandler={loadCategory('chill')}>
        For brogrammers
      </DebouncedButton>
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
