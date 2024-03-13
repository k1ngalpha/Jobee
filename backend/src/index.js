import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import JobPosting from "./models/jobpostingModel.js";
import jobRouter from "./routes/JobRouter.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database has been successfully connected"));
app.use(express.json());
app.use("/api", jobRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
