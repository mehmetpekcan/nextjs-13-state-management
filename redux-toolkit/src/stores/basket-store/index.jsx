import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const { actions, reducer } = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const selectBasket = ({ basket }) => basket.basket;
