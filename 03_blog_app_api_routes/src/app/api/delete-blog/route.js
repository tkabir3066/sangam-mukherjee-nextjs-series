import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (!blogId) {
      return NextResponse.json({
        success: false,
        message: "Invalid blog id.",
      });
    }

    const deleteCurrentBlogById = await Blog.findByIdAndDelete(blogId);

    if (deleteCurrentBlogById) {
      return NextResponse.json({
        success: true,
        message: "Blog id deleted successfully.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "An error occurred while deleting the blog.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while deleting the blog.",
    });
  }
}
