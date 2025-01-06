import connectDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
export async function POST(req) {
  try {
    await connectDB();

    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;

    const { error } = addNewBlog.validate({ title, description });

    if (error) {
      return NextResponse.json(
        { success: false, message: error.details[0].message },
        { status: 400 }
      );
    }

    // Save the blog data to the database
    // const newBlog = new Blog({ title, content });
    // await newBlog.save();

    const newBlogItem = await Blog.create(extractBlogData);

    if (newBlogItem) {
      return NextResponse.json(
        { success: true, message: "Blog added successfully!" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to add blog!" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! please try again later.",
      },
      { status: 500 }
    );
  }
}
