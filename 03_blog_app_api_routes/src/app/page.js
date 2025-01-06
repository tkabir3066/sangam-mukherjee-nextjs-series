import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <div className="container mx-auto p-6  rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-4xl text-white font-bold mb-4">
          Browse Our Blog Collection
        </h2>

        <Link
          className="bg-white text-sm text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 hover:text-white"
          href="/blogs"
        >
          Explore Blogs
        </Link>
      </div>
    </div>
  );
}
