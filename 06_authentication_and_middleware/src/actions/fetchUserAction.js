"use server";

import connectToDb from "@/database";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
export const fetchAuthUserAction = async () => {
  await connectToDb();

  try {
    const getCookies = await cookies();
    const token = getCookies.get("token")?.value || "";

    if (token === "") {
      return {
        success: false,
        message: "Token is Invalid",
      };
    }

    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });
    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Some error occurred! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
};
