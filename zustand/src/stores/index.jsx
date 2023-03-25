import { create } from "zustand";

import { createProductsStore } from "./products-store";
import { createBasketStore } from "./basket-store";

export const useStore = create((...args) => ({
  ...createProductsStore(...args),
  ...createBasketStore(...args),
  hydrateStore: (data) => {
    const [set] = args;
    set({ ...data });
  },
}));
