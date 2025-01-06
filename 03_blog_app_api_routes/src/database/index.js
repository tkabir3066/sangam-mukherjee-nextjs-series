import mongoose from "mongoose";

const connectDB = async () => {
  const connectionUrl =
    "mongodb+srv://tutulkabir:mfPGpAkHKci1Jnkh@cluster0.dabrs.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
