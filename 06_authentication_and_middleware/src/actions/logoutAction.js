"use server";
import { cookies } from "next/headers";

export const logoutAction = async () => {
  const getCookies = await cookies();
  getCookies.set("token", "");
};
