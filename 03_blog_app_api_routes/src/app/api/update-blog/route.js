import connectDB from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";

const editBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
export async function PUT(req) {
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

    const { title, description } = req.json();

    const { error } = editBlog.validate({ title, description });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.details[0].message },
        { status: 400 }
      );
    }

    const updateBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        title,
        description,
      },
      { new: true }
    );

    if (updateBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "An error occurred while updating the blog.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while updating the blog.",
    });
  }
}
