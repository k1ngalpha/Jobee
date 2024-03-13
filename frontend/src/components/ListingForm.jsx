const ListingForm = () => {
  return (
    <form className="bg-blue-500 p-3">
      <label>Job Title</label>
      <input type="text" className="border" />
      <label>Job Description</label>
      <textarea type="text" className="border" />
      <label>About Company</label>
      <input type="text" className="border" />
      <button className="bg-red-500">Apply</button>
    </form>
  );
};

export default ListingForm;
