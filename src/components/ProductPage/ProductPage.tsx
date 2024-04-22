import React, { useEffect } from 'react';
import PageLayout from '../PageLayout/PageLayout';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductSalesTable from '../ProductSalesTable/ProductSalesTable';
import { useAppDispatch } from '../../common/hooks'
import { fetchProductData } from '../../store/product/productSlice';

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  //TODO: add loading indicator when product is not loaded
  return (
    <PageLayout
      leftComponent={<ProductInfo />}
      rightComponenet={<ProductSalesTable />}
    />
  );
};

export default ProductPage;