import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AccountPage = () => {
  //assume that profile info is null the redirect to the profile page
  const userProfile = null;
  if (!userProfile) {
    // redirect("/profile");
    // redirect("/cart?search=product1&randomValue=123");
    redirect("/products?search=product1");
  }
  return (
    <div>
      <h1 className="mb-10">AccountPage</h1>
      <Link
        className="ml-10 bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold "
        href={"/"}
      >
        Home Page
      </Link>
    </div>
  );
};

export default AccountPage;
