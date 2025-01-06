import BlogOverview from "@/components/blog-overview/BlogOverview";
import React from "react";

async function fetchListOfBlogs() {
  try {
    const response = await fetch("http://localhost:3000/api/get-blogs", {
      method: "GET",
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
const BlogsPage = async () => {
  const blogs = await fetchListOfBlogs();

  return <BlogOverview blogs={blogs} />;
};

export default BlogsPage;
