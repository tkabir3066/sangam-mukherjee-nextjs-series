"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function ProductCard({ product }) {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-lg fond-bold text-gray-900">
            {product?.title}
          </CardTitle>
          <div className="mt-4 flex justify-between items-center flex-wrap">
            <p className="text-lg font-extrabold text-gray-700">
              {product?.price}
            </p>

            <div>
              <Button onClick={() => router.push(`/${product?.id}`)}>
                Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
