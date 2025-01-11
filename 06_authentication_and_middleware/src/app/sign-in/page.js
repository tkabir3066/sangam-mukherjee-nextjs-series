"use client";

import { loginUserAction } from "@/actions/signInAction";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLOginFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [signinFormData, setSigninFormData] = useState(initialLoginFormData);
  const router = useRouter();
  const handleSignIn = async () => {
    const result = await loginUserAction(signinFormData);
    console.log(result);
    if (result?.success) {
      router.push("/");
    }
  };
  return (
    <div className="max-w-3xl p-24 mx-auto">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form action={handleSignIn}>
        {userLOginFormControls.map((controlItem) => (
          <div key={controlItem.name} className="mb-5">
            <Label className="text-lg font-semibold">{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={signinFormData[controlItem.name]}
              onChange={(e) =>
                setSigninFormData({
                  ...signinFormData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        ))}

        <Button type="submit">Signin</Button>
      </form>
    </div>
  );
};

export default SignIn;
