import { ReduxProvider } from "@/provider";
import React from "react";

async function CommonLayout({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

export default CommonLayout;
