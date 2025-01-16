import { fetchAllProducts } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/product-card/ProductCard";
import { redirect } from "next/navigation";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="max-w-6xl mx-auto min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-2">
        {getAllProducts.data && getAllProducts.data.length > 0 ? (
          getAllProducts.data.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        ) : (
          <h3>No product to show</h3>
        )}
      </div>
    </div>
  );
}
