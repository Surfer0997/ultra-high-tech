import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DebouncedButton } from '../../../UI/DebouncedButton';
import { getCategoryBooks } from '../Products/productsSlice';
import styles from './Categories.module.css';

export const Categories = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useDispatch<any>();
    const loadCategory = (category:string) => ()=> {
        if (!isDisabled) {
            setIsDisabled(true);
            dispatch(getCategoryBooks(category));
            setTimeout(()=>setIsDisabled(false), 800);
        }
        
    }

    return (
        <section className={styles.categories}>
            <DebouncedButton clickHandler={loadCategory('cats')}>For cats</DebouncedButton>
            <DebouncedButton clickHandler={loadCategory('dogs')}>For dogs</DebouncedButton>
            <DebouncedButton clickHandler={loadCategory('sport')}>For nerds</DebouncedButton>
            <DebouncedButton clickHandler={loadCategory('program')}>For programmers</DebouncedButton>
            <DebouncedButton clickHandler={loadCategory('chill')}>For brogrammers</DebouncedButton>
        </section>
    )
};

