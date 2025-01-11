import { fetchAuthUserAction } from "@/actions/fetchUserAction";
import Logout from "@/components/log-out";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success) {
    redirect("/sign-in");
  }
  return (
    <div className="max-w-3xl mx-auto my-16">
      <h1>Next Js Authentication</h1>
      <h2>{currentUser?.data?.username}</h2>
      <p>{currentUser?.data?.email}</p>

      <Logout />
    </div>
  );
}
