"use server";

export async function fetchListOfProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data?.products;
  } catch (error) {
    console.log(error);
  }
}
