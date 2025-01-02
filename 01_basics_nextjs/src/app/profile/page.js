import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="mb-10">This is our profile page</h1>

      <Link
        className="ml-10 bg-blue-800 text-white px-5 py-3 rounded-lg outline-none font-semibold "
        href={"/"}
      >
        Home Page
      </Link>
    </div>
  );
};

export default Profile;
