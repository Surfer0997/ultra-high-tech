import { Product } from './Product/Product';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { LoadingStatus } from '../../../../types/types';
import { ErrorIndicator } from '../../../UI/ErrorIndicator';
import { LoadingIndicator } from '../../../UI/LoadingIndicator';
import { ProductsPagesControls } from './ProductsPagesControls/ProductsPagesControls';

export const Products = () => {
  const { products, status, nextPage, previousPage } = useSelector(
    (state: RootState) => state.products
  );
  const { error, loading } = LoadingStatus;

  const mappedProducts = products.map(item => (
    <Product
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.authors[0]?.name}
      imageSrc={item.formats['image/jpeg']}
    />
  ));

  const content =
    status === error ? (
      <ErrorIndicator />
    ) : status === loading ? (
      <LoadingIndicator />
    ) : (
      mappedProducts
    );

  return (
    <>
      <div className={styles.products}>{content}</div>
      <ProductsPagesControls/> 
    </>
  );
};
