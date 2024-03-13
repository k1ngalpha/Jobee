import { useForm } from "react-hook-form";
import Header from "../components/Header";
import ListingForm from "../components/ListingForm";

const AddListings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-pink-500">
      <Header />
      <ListingForm />
    </div>
  );
};

export default AddListings;
