"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { Cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(Cart?.cartItems.reduce((acc, curr) => acc + curr?.price, 0));
  }, []);

  if (!Cart?.cartItems.length) {
    return <h2 className="text-4xl font-bold">Cart item is empty</h2>;
  }

  const handleRemoveFromCart = (getCurrentItemId) => {
    dispatch(removeFromCart(getCurrentItemId));
  };
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
        <div className="overflow-x-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr className="text-base text-gray-700 p-4">
                <th>Title</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap text-left divide-y">
              {Cart?.cartItems.map((item) => (
                <tr>
                  <td className="py-5 px-4">
                    <div className="flex items-center justify-center gap-6 w-max">
                      <div className="w-36 shrink-0">
                        <img
                          src={item?.thumbnail}
                          alt={item?.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-black">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item?.price}</p>
                  </td>

                  <td className="py-5 px-4">
                    <Button onClick={() => handleRemoveFromCart(item?.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-xl ml-auto mt-6">
          <div>
            <p className="text-lg font-bold">
              Total: <span>{totalAmount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
