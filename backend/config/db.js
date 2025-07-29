import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_USER } = process.env;
const uri = `${MONGO_USER}`;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB CONNECTED");
  } catch (err) {
    console.error("DB CONNECTION ERROR:", err);
  }
};
