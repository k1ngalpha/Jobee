import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

import userRouter from "../src/auth/routes/AuthRouter.js";
import jobRouter from "./routes/JobRouter.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database has been successfully connected"));
app.use(cookieParser());
app.use(express.json());

app.use("/api", jobRouter);
app.use("/api/auth", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
