import { useStore } from "@/stores";
import { AddBasketButton } from "@/components/add-basket-button";
import Link from "next/link";

export default async function HomePage() {
  const { getProducts } = useStore.getState();
  const products = await getProducts();

  if (!products.length) {
    return <h1>No products</h1>;
  }

  return (
    <>
      <h1>Home Page</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h4 className="product-title">{product.title}</h4>
            <p>{product.price}</p>
            <AddBasketButton product={product} />
            <Link href={`/products/${product.id}`}>See detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
