import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
  }
};

export default connectDB;