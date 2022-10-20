import { Product } from './Product/Product';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export const Products = () => {

    const products = useSelector((state: RootState)=>state.products.products);
    
  console.log(products);
  return (
    <div className={styles.products}>
      {products.map(item => (
        <Product
          key={item.id}
          title={item.title}
          author={item.authors[0]?.name}
          imageSrc={item.formats['image/jpeg']}
        />
      ))}
    </div>
  );
};
