"use server";

import connectToDb from "@/database";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export const registerUserAction = async (formData) => {
  await connectToDb();

  try {
    const { username, email, password } = formData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return {
        success: false,
        message: "User already exist! please try with different email",
      };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newlyCreatedUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newlyCreatedUser.save();

    if (savedUser) {
      return {
        success: true,
        message: "User saved successfully",
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something error occurred",
    };
  }
};
