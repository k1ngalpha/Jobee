// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { allListing } from "../controller/jobController";
// import { jobSelector } from "../redux/user/jobSlice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const { job, isLoading, isSuccess, isError, errorMessage } =
//     useSelector(jobSelector);

//   useEffect(() => {
//     dispatch(allListing(currentPage));
//   }, [dispatch, currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   return isSuccess ? (
//     <div>
//       {job.map((data) => (
//         <div className="p-2 border m-2 shadow-sm bg-yellow-100" key={data._id}>
//           <h1 className="text-xl font-semibold">{data.job_title}</h1>
//           <h2>{data.company_name}</h2>
//           <h2>{data.job_type}</h2>
//           <p>{data.job_description}</p>
//         </div>
//       ))}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//           className="mr-2 px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={isLoading}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   ) : (
//     <h1>Loading</h1>
//   );
// };
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allListing } from "../controller/jobController";
import { jobSelector } from "../redux/user/jobSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { job, isLoading, isSuccess, isError, errorMessage } =
    useSelector(jobSelector);
  const [toggledJobs, setToggledJobs] = useState({});

  useEffect(() => {
    dispatch(allListing(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleToggle = (jobId) => {
    setToggledJobs((prevState) => ({
      ...prevState,
      [jobId]: !prevState[jobId],
    }));
  };

  return isSuccess ? (
    <div>
      {job.map((data) => (
        <div key={data._id}>
          <div
            className="p-2 border m-2 shadow-sm bg-yellow-100"
            onClick={() => handleToggle(data._id)}
          >
            <h1 className="text-xl font-semibold">{data.job_title}</h1>
            <h2>{data.company_name}</h2>
            <h2>{data.job_type}</h2>
            <p>{data.job_description}</p>
          </div>
          {toggledJobs[data._id] && (
            <div className="p-2 m-2 shadow-sm bg-white">
              <h1 className="text-xl font-semibold">{data.job_title}</h1>
              <h2>{data.company_name}</h2>
              <h2>{data.job_type}</h2>
              <p>{data.job_description}</p>
              <p>{data.salary}</p>
              <p>{data.about_company}</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-gray-200 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={isLoading}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
