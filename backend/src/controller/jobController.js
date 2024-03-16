import JobListing from "../models/joblistingModel.js";

export const addListing = async (req, res) => {
  const {
    job_title,
    company_name,
    job_type,
    job_description,
    salary,
    about_company,
  } = req.body;
  //Need to validate the data and avoid duplicate enrty
  try {
    await JobListing.create({
      job_title: job_title,
      company_name: company_name,
      job_type: job_type,
      job_description: job_description,
      salary: salary,
      about_company: about_company,
    });
    res.status(200).json({ message: "Job has been saved successfully" });
  } catch (error) {
    console.log(`/add-listing ${error}`);
    res.status(500).json({ message: "Error posting job" });
  }
};
