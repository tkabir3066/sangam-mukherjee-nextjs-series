"use client";

import React from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions/logoutAction";

const Logout = () => {
  const handleLogout = async () => {
    await logoutAction();
  };
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Logout;
