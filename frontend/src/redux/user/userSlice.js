import { createSlice } from "@reduxjs/toolkit";
import { signinUser, signupUser } from "../../auth/AuthController";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signupUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          payload.message || "An error occurred during sign-up";
      })
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signinUser.rejected, (state, { payload }) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage =
          payload.message || "An error occurred during sign-in";
      })
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const userSelector = (state) => state.user;
