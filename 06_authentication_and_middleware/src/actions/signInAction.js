"use server";

import connectToDb from "@/database";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const loginUserAction = async (formData) => {
  await connectToDb();

  try {
    const { email, password } = formData;

    //check if user exist or not
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return {
        success: false,
        message: "User doesn't exists! please signup",
      };
    }

    //check if password is valid or not
    // const salt = await bcryptjs.genSalt(10);
    // const hashedPassword = await bcryptjs.hash(password, salt);
    const isPasswordValid = await bcryptjs.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Password is incorrect",
      };
    }

    const createdTokenData = {
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    };

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
      expiresIn: "1d",
    });

    const getCookies = await cookies();
    getCookies.set("token", token);

    return {
      success: true,
      message: "Logged in successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
};
