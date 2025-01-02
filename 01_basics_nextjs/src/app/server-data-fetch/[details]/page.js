import Link from "next/link";

const fetchUserDetails = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/user/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

const UserDetails = async ({ params }) => {
  const usersParams = await params;
  const userDetails = await fetchUserDetails(usersParams.details);
  console.log("User details:", userDetails);
  return (
    <div className="text-center mt-24">
      <Link
        className="bg-sky-700 px-5 py-3 rounded-lg text-white mb-5 font-semibold"
        href={"/server-data-fetch"}
      >
        Go to the user list page
      </Link>
      <h1 className="text-xl font-bold my-5">This is user details page</h1>
      <div className="flex justify-center items-center gap-4 max-w-lg rounded-lg my-10 mx-auto p-24 bg-gray-200">
        <div>
          <h1 className="text-xl font-bold mb-3">User Details</h1>
          <p>
            Name: {userDetails.firstName} {userDetails.lastName}
          </p>
          <p>Age: {userDetails.age}</p>
          <p>email: {userDetails.email}</p>
        </div>
        <div>
          <img src={userDetails.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
