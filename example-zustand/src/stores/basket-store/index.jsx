export const createBasketStore = (set, get) => ({
  basket: [],
  addToBasket: (product) => {
    const { basket } = get();
    const finalBasket = [...basket, product];

    set({ basket: finalBasket });

    return finalBasket;
  },
});
