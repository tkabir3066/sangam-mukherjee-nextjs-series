import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const checkPublicPath = path === "/sign-in" || path === "/sign-up";
  const getCookies = await cookies();
  const token = getCookies.get("token")?.value || "";

  if (checkPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!checkPublicPath && token === "") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/sign-in", "/sign-up"],
};
