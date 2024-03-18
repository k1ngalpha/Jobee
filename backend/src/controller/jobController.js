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

// export const allListing = async (req, res) => {
//   try {
//     const allListings = await JobListing.find();
//     res.json(allListings);
//   } catch (error) {
//     console.log(`/all-listing ${error}`);
//     res.status(500).json({ message: "Error Fetching the lisiting" });
//   }
// };
export const allListing = async (req, res) => {
  try {
    const pageSize = 5;
    const pageNumber = req.query.page ? parseInt(req.query.page) : 1;
    const skip = (pageNumber - 1) * pageSize;
    const allListings = await JobListing.find().skip(skip).limit(pageSize);
    const total = await JobListing.countDocuments();

    const response = {
      data: allListings,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log(`/all-listing ${error}`);
    res.status(500).json({ message: "Error Fetching the listings" });
  }
};
