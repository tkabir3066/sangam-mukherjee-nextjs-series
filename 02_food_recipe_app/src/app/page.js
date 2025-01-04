import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-span-2 text-center">
        <h1 className="text-4xl font-bold text-center mb-10">
          Food Recipe App
        </h1>

        <Link
          className="bg-blue-600 px-10 py-3 font-semibold text-white rounded-lg"
          href="/recipe-list"
        >
          Explore Recipes
        </Link>
      </div>
    </div>
  );
}
