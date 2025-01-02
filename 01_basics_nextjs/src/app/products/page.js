import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="mb-10">Products Page</h1>
      <Link
        className="ml-10 bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold "
        href={"/"}
      >
        Home page
      </Link>
    </div>
  );
};

export default ProductsPage;
