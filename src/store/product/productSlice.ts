import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductDataApi } from "../../mocks/api";

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
}

export interface ProductState {
  product: Product ;
  loading: boolean;
  error: unknown | null;
}

const initialState: ProductState = {
  product: {
    id: '',
    title: '',
    image: '',
    subtitle: '',
    brand: '',
    reviews: [],
    retailer: '',
    details: [],
    tags: [],
    sales: [],
  },
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
  
});

export default productSlice.reducer;

export const fetchProductData = createAsyncThunk(
  'product/fetchProductData',
  async (_, { dispatch }) => {
    try {
      const productData = await fetchProductDataApi();
      return productData[0];
    } catch (error) {
      throw error;
    }
  }
);