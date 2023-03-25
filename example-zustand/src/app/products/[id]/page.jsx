import { AddBasketButton } from "@/components/add-basket-button";
import { useStore } from "@/stores";

export default async function ProductDetailPage({ params: { id } }) {
  const { getProduct } = useStore.getState();
  const product = await getProduct(id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
