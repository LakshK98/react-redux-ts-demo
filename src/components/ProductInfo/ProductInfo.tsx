import React, { useEffect } from 'react';
import styles from './ProductInfo.module.css';
import { useAppSelector } from '../../common/hooks';

const ProductInfo: React.FC = () => {
  const product = useAppSelector(state => state.product.product);

  return (
    <div className={styles['product-info']}>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductInfo;