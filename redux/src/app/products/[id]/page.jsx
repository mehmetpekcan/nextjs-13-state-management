import { AddBasketButton } from "@/components/add-basket-button";

export default async function ProductDetailPage({ params: { id } }) {
  const product = {};

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
