import mongoose from "mongoose";

const connectToDb = async () => {
  const uri =
    "mongodb+srv://tutulkabir:mfPGpAkHKci1Jnkh@cluster0.dabrs.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(uri)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDb;
