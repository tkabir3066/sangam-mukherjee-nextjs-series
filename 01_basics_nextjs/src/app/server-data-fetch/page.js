import Link from "next/link";
import React from "react";
//fetch

const fetchListOfUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    // console.log(data);
    return data?.users;
  } catch (error) {
    console.log("Error:", error);
  }
};
const ServerSideDataFetching = async () => {
  const listOfUsers = await fetchListOfUsers();

  return (
    <div className="px-24 py-16">
      <h1 className="text-2xl font-bold">
        Server Side Data Fetching: User list page
      </h1>

      <ul className="mt-8">
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers?.map((user) => (
              <li className="mb-5" key={user.id}>
                <Link
                  className="bg-sky-700 px-5 py-3 rounded-lg text-white mb-5 font-semibold"
                  href={`/server-data-fetch/${user.id}`}
                >
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
