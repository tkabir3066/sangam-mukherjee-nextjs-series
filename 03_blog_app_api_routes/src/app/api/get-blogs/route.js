const { default: connectDB } = require("@/database");
const { default: Blog } = require("@/models/blog");
const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    await connectDB();
    const blogs = await Blog.find();
    if (blogs.length !== 0) {
      return NextResponse.json({ success: true, data: blogs }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, message: "No blogs found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong.." },
      { status: 500 }
    );
  }
};
