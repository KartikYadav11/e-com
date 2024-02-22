import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is runnin on port ${process.env.PORT}`);
});
