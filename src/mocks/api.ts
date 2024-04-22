
import productData from './data/productData.json';
import { Product } from '../store/product/productSlice';

export const fetchProductDataApi = async (): Promise<Product[]> => {
  try {
    return productData;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
