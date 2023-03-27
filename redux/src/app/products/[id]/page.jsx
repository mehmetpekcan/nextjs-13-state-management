import { AddBasketButton } from "@/components/add-basket-button";
import { store } from "@/stores";
import { getProduct } from "@/stores/products-store";

export default async function ProductDetailPage({ params: { id } }) {
  const { payload: product } = await store.dispatch(getProduct(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
