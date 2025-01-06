"use client";

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

const AddNewBlog = ({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
  initialBlogFormData,
  currentEditedBlogId,
  setCurrentEditedBlogId,
}) => {
  return (
    <>
      <div>
        <Button
          className="font-bold hover:bg-white hover:text-black"
          onClick={() => setOpenBlogDialog(true)}
        >
          Add New BLog
        </Button>
      </div>

      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
          setBlogFormData(initialBlogFormData);
          setCurrentEditedBlogId(null);
        }}
      >
        <DialogContent
          aria-describedby={undefined}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>
              {currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                id="title"
                placeholder="Enter Blog Title"
                value={blogFormData.title || ""}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, title: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                id="description"
                value={blogFormData.description || ""}
                placeholder="Enter Blog Description"
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveBlogData} type="button">
              {currentEditedBlogId ? "Update" : " Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewBlog;
