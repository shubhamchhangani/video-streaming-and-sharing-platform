import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(
      process.env.PORT || 8000,
      `server is successfully running on port ${process.env.PORT}`
    );
  })
  .catch((error) => {
    console.log("Mongo db connection failed!! ", error);
  });
