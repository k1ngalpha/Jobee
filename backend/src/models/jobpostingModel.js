import mongoose from "mongoose";

const JobPostingSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: true,
    },
    job_description: {
      type: String,
      required: true,
    },
    about_company: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobPosting = mongoose.model("JobPosting", JobPostingSchema);

export default JobPosting;
