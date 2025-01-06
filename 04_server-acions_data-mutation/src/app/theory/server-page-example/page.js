import { fetchListOfProducts } from "@/actions";

async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  return (
    <div>
      <h1>Server Actions Example - Server Component</h1>

      <ul>
        {products && products.length > 0 ? (
          products.map((product) => <li key={product?.id}>{product?.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ServerActionsExample;
