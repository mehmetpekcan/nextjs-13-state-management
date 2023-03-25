"use client";

import { useStore } from "@/stores";

export function AddBasketButton({ product }) {
  const { addToBasket } = useStore();

  const handleAddBasket = () => {
    addToBasket(product);
  };

  return <button onClick={handleAddBasket}>Add to basket</button>;
}
