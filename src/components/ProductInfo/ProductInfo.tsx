import React, { useEffect } from 'react';
import styles from './ProductInfo.module.css';
import { useAppSelector } from '../../common/hooks';

const ProductInfo: React.FC = () => {
  const product = useAppSelector(state => state.product.product);

  return (
    <div className={styles['product-info']}>
    <div className={styles['section']}>
      <img src={product.image} />
      <p className={styles['title']}>{product.title}</p>
      <p className={styles['subtitle']}>{product.subtitle}</p>
    </div>
    <div className={styles['horizontal-line']}></div>

    <div className={styles['section']}>
      <div >
        {product.tags.map((tag, index) => (
          <span key={index} className={styles['tag']}>{tag}</span>
        ))}
      </div>
    </div>
    <div className={styles['horizontal-line']}></div>
    </div>
  );
};

export default ProductInfo;