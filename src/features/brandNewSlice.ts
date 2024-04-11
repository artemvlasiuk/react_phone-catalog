/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { getBrandNew } from '../api/api';

export interface BrandNewProductsState {
  brandNew: Product[];
  loaded: boolean;
  hasError: boolean;
}

const initialState: BrandNewProductsState = {
  brandNew: [],
  loaded: true,
  hasError: false,
};

export const init = createAsyncThunk('brandNew/fetch', async () => {
  const products = await getBrandNew;

  return products;
});

const brandNewSlice = createSlice({
  name: 'brandNew',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(init.pending, state => {
        state.loaded = false;
      })
      .addCase(init.fulfilled, (state, action) => {
        state.brandNew = action.payload;
        state.loaded = true;
      })
      .addCase(init.rejected, state => {
        state.hasError = true;
        state.loaded = true;
      });
  },
});

export default brandNewSlice.reducer;
