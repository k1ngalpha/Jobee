import { createSlice } from "@reduxjs/toolkit";
import { addListing, allListing } from "../../controller/jobController";

const initialState = {
  job: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addListing.fulfilled, (state, { payload }) => {
        state.job = payload.job;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(addListing.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          payload.message || "An error occurred during adding job";
      })
      .addCase(addListing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allListing.fulfilled, (state, { payload }) => {
        state.job = payload.data;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(allListing.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          payload.message || "An error occurred fetching the jobs";
      })
      .addCase(allListing.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const jobSelector = (state) => state.job;
