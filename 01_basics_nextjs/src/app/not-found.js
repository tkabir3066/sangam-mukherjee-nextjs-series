import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="mb-10">This page does not exist</h1>
      <Link
        className="ml-10 bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold "
        href={"/"}
      >
        Go back to Home page
      </Link>
    </div>
  );
};

export default NotFound;
