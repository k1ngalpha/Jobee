import { useDispatch, useSelector } from "react-redux";
import { jobSelector } from "../redux/user/jobSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addListing } from "../controller/jobController";

const salaryRanges = [
  { label: "100,000 - 400,000", value: "fresher" },
  { label: "500,000 - 1,000,000", value: "junior" },
  { label: "1,000,000 - 1,500,000", value: "senior" },
  { label: "2,500,000+", value: "executive" },
];

const jobTypes = [
  { label: "Internship", value: "internship" },
  { label: "Part-Time", value: "parttime" },
  { label: "Full-Time", value: "fulltime" },
];

const AddListings = () => {
  const { isLoading, isSuccess, isError, errorMessage } =
    useSelector(jobSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(addListing(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Job added successfully");
      //navigate("/");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
  }, [isError, errorMessage]);

  return (
    <div className="bg-yellow-50 mt-20 mb-10">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit(submitForm)}
          //className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl mx-auto"
        >
          <h1 className="block text-gray-700 text-xl font-bold mb-2 text-center">
            Add Job Listing
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobtitle"
              type="text"
              placeholder="Enter job title"
              {...register("job_title", {
                required: "Job title is required",
                minLength: {
                  value: 5,
                  message: "The Job title must be atleat 5 characters long",
                },
              })}
            />
            {errors.job_title && (
              <span className="text-red-500">{errors.job_title.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="companyname"
            >
              Company name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyname"
              type="text"
              placeholder="Enter company name"
              {...register("company_name", {
                required: "Company name is required",
                minLength: {
                  value: 3,
                  message: "The Company name must be atleat 3 characters long",
                },
              })}
            />
            {errors.company_name && (
              <span className="text-red-500">
                {errors.company_name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobType"
              {...register("job_type", { required: true })}
            >
              <option value="" disabled>
                -- Select Job Type --
              </option>
              {jobTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.job_type && (
              <span className="text-red-500">{errors.job_type.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="jobDescription"
            >
              Job Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobdescription"
              rows="4"
              placeholder="Enter job description"
              {...register("job_description", {
                required: "Job description is required",
                minLength: {
                  value: 10,
                  message:
                    "The Job description must be atleat 10 characters long",
                },
              })}
            ></textarea>
            {errors.job_description && (
              <span className="text-red-500">
                {errors.job_description.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="SalaryRange"
            >
              Salary Range
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="salaryRange"
              {...register("salary", { required: true })}
            >
              <option value="" disabled>
                -- Select Salary Range --
              </option>
              {salaryRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            {errors.salary && (
              <span className="text-red-500">{errors.salary.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="companyInfo"
            >
              About Company
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyinfo"
              type="text"
              placeholder="Enter company information"
              {...register("about_company", {
                minLength: {
                  value: 10,
                  message:
                    "The Company inform must be atleat 10 characters long",
                },
              })}
            ></textarea>
            {errors.about_company && (
              <span className="text-red-500">
                {errors.about_company.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              disabled={isLoading}
              className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Apply
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default AddListings;
