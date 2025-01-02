"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { use } from "react";

const Cart = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  //   console.log(pathName);
  console.log(searchParams.get("search"), searchParams.get("randomValue"));
  return (
    <div>
      <h1>This is cart component</h1>
    </div>
  );
};

export default Cart;
