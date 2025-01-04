import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-5">
        This page can not be found.
      </h1>
      <Link href={"/"}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
