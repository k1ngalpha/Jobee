import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSelector } from "../redux/user/userSlice";
import { signinUser } from "../auth/AuthController";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { isLoading, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (data) => {
    dispatch(signinUser(data));
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Sign up successful");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
  }, [isError, errorMessage]);
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-50">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            rows="4"
            placeholder="Enter Email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="companyInfo"
          >
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "The password must be atleat 8 characters long",
              },
              //maxLength: 20,
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirmpassword"
          >
            Confirm password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: "confirm password is required",
              validate: (value) => {
                if (!value) {
                  return "This field is required";
                } else if (watch("password") !== value) {
                  return "The passwords do not match";
                }
              },
            })}
          />
          {errors.confirmpassword && (
            <span className="text-red-500">
              {errors.confirmpassword.message}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            disabled={isLoading}
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            sign-in
          </button>
        </div>
        <span className="block text-gray-700 font-bold mt-2">
          {"Don't have an account?"}
          <Link
            to="/sign-up"
            className="ml-1 text-gray-700 font-bold hover:text-yellow-500"
          >
            sign-up
          </Link>
        </span>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignIn;
