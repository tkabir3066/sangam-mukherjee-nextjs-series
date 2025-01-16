"use server";

import { signIn, signOut } from "@/auth";

export const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! please try again",
    };
  }
};

export const fetchProductDetails = async (currentProductId) => {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${currentProductId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! please try again",
    };
  }
};

export const loginAction = async () => {
  await signIn("github");
};

export const logoutAction = async () => {
  await signOut();
};
