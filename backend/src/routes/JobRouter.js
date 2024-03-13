import express from "express";
import JobPosting from "../models/jobpostingModel.js";

const router = express.Router();

router.post("/add-listing", async (req, res) => {
  const { job_title, job_description, about_company } = req.body;
  //Need to validate the data
  try {
    await JobPosting.create({
      job_title: job_title,
      job_description: job_description,
      about_company: about_company,
    });
    res.status(200).json({ message: "Job has been saved successfully" });
  } catch (error) {
    console.log(`/add-listing ${error}`);
    res.status(500).json({ message: "Error posting job" });
  }
});

export default router;
