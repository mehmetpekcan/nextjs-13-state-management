import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
};

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    return product;
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return products;
  }
);

export const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
