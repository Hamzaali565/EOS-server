import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected", connection.connection.host);
  } catch (error) {
    console.log("mongoose error =>", error);
  }
};

export { connectDB };
