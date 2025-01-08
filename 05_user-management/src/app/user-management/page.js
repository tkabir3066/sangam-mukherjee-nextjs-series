import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user/AddNewUser";
import SingleUserCard from "@/components/single-user-card/SingleUserCard";

async function UserManagement() {
  const listOfUsers = await fetchUsersAction();
  console.log(listOfUsers);
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-5">
        {listOfUsers && listOfUsers?.data && listOfUsers.data.length > 0 ? (
          listOfUsers.data.map((user) => (
            <SingleUserCard key={user?._id} user={user} />
          ))
        ) : (
          <h2>No User found</h2>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
