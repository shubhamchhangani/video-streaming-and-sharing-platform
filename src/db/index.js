import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;

/*
const mongodb_uri = process.env.MONGODB_URI;
async function connectDB() {
  mongoose
    .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected!!");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

export default connectDB;
*/
