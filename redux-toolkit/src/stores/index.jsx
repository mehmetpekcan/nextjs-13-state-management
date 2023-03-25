import { configureStore } from "@reduxjs/toolkit";

import { reducer as basketReducer } from "./basket-store";
import { reducer as productsReducer } from "./products-store";
import { reducer as userReducer } from "./user-store";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      basket: basketReducer,
      products: productsReducer,
      user: userReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
