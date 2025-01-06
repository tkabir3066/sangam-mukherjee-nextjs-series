"use client";

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog/AddNewBlog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";

const initialBlogFormData = {
  title: "",
  content: "",
};

function BlogOverview({ blogs }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);
  const handleSaveBlogData = async () => {
    try {
      setLoading(true);
      const apiResponse =
        currentEditedBlogId !== null
          ? await fetch(`/api/update-blog?id=${Number(currentEditedBlogId)}`, {
              method: "PUT",
              body: JSON.stringify(blogFormData),
            })
          : await fetch("/api/add-blog", {
              method: "POST",

              body: JSON.stringify(blogFormData),
            });

      const blogData = await apiResponse.json();
      if (blogData?.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setCurrentEditedBlogId(null);
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };

  const handleDeleteBlogById = async (blogId) => {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${blogId}`, {
        method: "DELETE",
      });

      const deleteBlogData = await apiResponse.json();
      if (deleteBlogData?.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const handleEdit = (blogItem) => {
    setCurrentEditedBlogId(blogItem?._id);

    setBlogFormData({
      title: blogItem?.title,
      description: blogItem?.description,
    });
    setOpenBlogDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
        initialBlogFormData={initialBlogFormData}
        currentEditedBlogId={currentEditedBlogId}
        setCurrentEditedBlogId={setCurrentEditedBlogId}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogs && blogs.length > 0 ? (
          blogs.map((blogItem) => (
            <Card key={blogItem._id} className="p-5">
              <CardContent>
                <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                <CardDescription>{blogItem?.description}</CardDescription>
                <div className="mt-6 flex items-center gap-4">
                  <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
                  <Button onClick={() => handleDeleteBlogById(blogItem?._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="">No blogs found.</Label>
        )}
      </div>
    </div>
  );
}

export default BlogOverview;
