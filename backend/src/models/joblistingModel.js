import mongoose from "mongoose";

const JobListingSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: true,
    },
    job_description: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
    about_company: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobListing = mongoose.model("JobListing", JobListingSchema);

export default JobListing;
