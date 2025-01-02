"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[500px] p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Next Js course 2025</h1>
      <Link
        className="bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold"
        href={"/products"}
      >
        Navigate to Products page
      </Link>
      <Link
        className="bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold"
        href={"/account"}
      >
        Navigate to Account page
      </Link>

      <h2 className="font-bold mt-10 text-lg">
        Alternative way of navigating using useRouter
      </h2>

      <button
        className="bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold"
        onClick={() => router.push("/products")}
      >
        Go to products page using useRouter
      </button>
    </div>
  );
}
