"use client";
import { useStore } from "@/stores";

export function Basket() {
  const { basket } = useStore();

  const totalAmount = basket.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return <div>Basket: {totalAmount.toFixed(2)}</div>;
}
