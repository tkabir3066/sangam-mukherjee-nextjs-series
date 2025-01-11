"use client";

import { registerUserAction } from "@/actions/signUpAction";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const router = useRouter();
  const handleSubmitButtonValid = () => {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  };

  const handleSignUp = async () => {
    const result = await registerUserAction(signUpFormData);
    console.log(result);
    if (result?.data) {
      router.push("/sign-in");
    }
  };
  return (
    <div className="max-w-3xl p-24 mx-auto">
      <h1 className="text-3xl font-bold text-center">Registration</h1>
      <form action={handleSignUp}>
        {userRegistrationFormControls.map((controlItem) => (
          <div key={controlItem.name} className="mb-5">
            <Label className="text-lg font-semibold">{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={signUpFormData[controlItem.name]}
              onChange={(e) =>
                setSignUpFormData({
                  ...signUpFormData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
        ))}
        <Button
          className="disabled:opacity-55"
          disabled={!handleSubmitButtonValid()}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
