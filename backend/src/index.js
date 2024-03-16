import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";

import userRouter from "../src/auth/routes/AuthRouter.js";
import jobRouter from "./auth/routes/JobRouter.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database has been successfully connected"));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api", jobRouter);
app.use("/api/auth", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
