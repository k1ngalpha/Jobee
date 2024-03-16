import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { jobSlice } from "./user/jobSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    job: jobSlice.reducer,
  },
});
