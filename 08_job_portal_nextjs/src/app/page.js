import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const user = await currentUser();
  // if user is authenticated then check profile is there or not
  const profileInfo = null;

  if (user && !profileInfo?._id) redirect("/onboard");
  //if profile info is there then onboarded as a candidate or a recruiter
  //but if profile info is not there then redirect to onboarding
  console.log(user);
  return (
    <>
      <section>main Content</section>
    </>
  );
}
