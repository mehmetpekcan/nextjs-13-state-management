export const createProductsStore = (set) => ({
  product: {},
  products: [],
  getProducts: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    set({ products });

    return products;
  },
  getProduct: async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    set({ product });

    return product;
  },
});
