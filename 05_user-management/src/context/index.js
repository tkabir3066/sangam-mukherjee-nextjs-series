"use client";
import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  return (
    <UserContext.Provider
      value={{
        currentEditedId,
        setCurrentEditedId,
        openPopUp,
        setOpenPopUp,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
