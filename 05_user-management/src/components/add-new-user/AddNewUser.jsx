"use client";

import { addNewUserAction } from "@/actions";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context";

function AddNewUser() {
  const {
    openPopUp,
    setOpenPopUp,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(UserContext);
  const router = useRouter();
  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result = await addNewUserAction(
      addNewUserFormData,
      "/user-management"
    );
    setOpenPopUp(false);
    setAddNewUserFormData(addNewUserFormInitialState);
    router.refresh();
  }
  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>

      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false),
            setAddNewUserFormData(addNewUserFormInitialState);
          setCurrentEditedId(null);
        }}
      >
        <DialogContent
          aria-describedby={undefined}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>
              {" "}
              {currentEditedId !== null ? "Edit User" : "Add New User"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div className="mb-3" key={controlItem.name}>
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  type={controlItem.type}
                  name={controlItem.name}
                  id={controlItem.name}
                  value={addNewUserFormData[controlItem.name]}
                  placeholder={controlItem.placeholder}
                  onChange={(e) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            ))}

            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
