"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

function AddToCartButton({ productItem }) {
  const { Cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(Cart?.cartItems);
  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productItem?.id));
  };
  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          Cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {Cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from Cart"
          : "Add to Cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
