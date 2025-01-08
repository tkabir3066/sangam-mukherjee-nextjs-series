"use client";

import { UserProvider } from "@/context";

function CommonLayout({ children }) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
}

export default CommonLayout;
