"use client";

import { useDispatch } from "react-redux";
import { actions as basketActions } from "@/stores/basket-store";

export function AddBasketButton({ product }) {
  const dispatch = useDispatch();

  const handleAddBasket = () => {
    dispatch(basketActions.addToBasket(product));
  };

  return <button onClick={handleAddBasket}>Add to basket</button>;
}
