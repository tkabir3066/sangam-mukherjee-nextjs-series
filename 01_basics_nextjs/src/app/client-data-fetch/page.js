"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
//useEffect hook
//swr, useSWR hook
//with loading state
const ClientSideDataFetching = () => {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  /*   const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data?.users) {
        setUsers(data?.users);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []); */
  console.log(data);

  if (error) {
    return (
      <h1 className="text-2xl font-semibold">
        Something went wrong! Please try again later.
      </h1>
    );
  }
  if (isLoading) {
    return (
      <h1 className="text-2xl font-semibold">Loading users! please wait...</h1>
    );
  }
  return (
    <div>
      <h1>Client Side Data Fetching</h1>

      {/*  <ul className="mt-8">
        {users && users.length > 0
          ? users?.map((user) => (
              <li className="mb-5" key={user.id}>
                <Link
                  className="bg-sky-700 px-5 py-3 rounded-lg text-white mb-5 font-semibold"
                  href={`/client-data-fetch/${user.id}`}
                >
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul> */}
      <ul className="mt-8">
        {data && data.users.length > 0
          ? data?.users?.map((user) => (
              <li className="mb-5" key={user.id}>
                <Link
                  className="bg-sky-700 px-5 py-3 rounded-lg text-white mb-5 font-semibold"
                  href={`/client-data-fetch/${user.id}`}
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

export default ClientSideDataFetching;
