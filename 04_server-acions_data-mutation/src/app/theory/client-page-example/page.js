"use client";

import { fetchListOfProducts } from "@/actions";
import React, { useEffect, useState } from "react";

function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();

    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Client Page Server Action Example</h1>
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

export default ClientPageExample;
