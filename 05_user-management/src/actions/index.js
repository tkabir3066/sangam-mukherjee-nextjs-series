"use server";

import connectToDb from "@/database";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

//add new user action

export const addNewUserAction = async (formData, pathToRevalidate) => {
  await connectToDb();

  try {
    //validate data using joi/other packages you can use

    const newlyCreatedUser = User.create(formData);

    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occurred to add a new user! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred to add a new user! please try again",
    };
  }
};
//fetch users action

export async function fetchUsersAction() {
  await connectToDb();
  try {
    const listOfUsers = await User.find({});

    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Some error occurred to add a new user! please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred to add a new user! please try again",
    };
  }
}

//edit a user action

export async function editUserAction(currentUserId, formData, pathToValidate) {
  
}

//delete a user action

export async function deleteUserAction(currentUserId, pathToRevalidate) {
  await connectToDb();
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserId);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Not able to perform delete operation",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Somthing went wrong! user id not matched",
    };
  }
}
