"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { loginAction } from "@/actions";

function Header() {
  const handleOauthSignIn = async () => {
    await loginAction();
  };

  return (
    <header className="flex shadow-md p-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="w-full flex flex-wrap justify-between items-center gap-5 ">
        <Link href={"/"}>Shopping Cart</Link>
      </div>

      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="flex space-x-3 ">
        <form action={handleOauthSignIn}>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
