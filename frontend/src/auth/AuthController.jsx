import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:3000";

export const signupUser = createAsyncThunk(
  "sign-up",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.status >= 200 && response.status < 300) {
        const res = await response.json();
        return res;
      } else {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      }
    } catch (error) {
      console.log("Frontend /signup error:", error);
      return thunkAPI.rejectWithValue({
        message: "An error occurred during sign-up",
      });
    }
  }
);

export const signinUser = createAsyncThunk(
  "/sign-in",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/sign-in`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status >= 200 && response.status < 300) {
        const res = await response.json();
        return res;
      } else {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      }
    } catch (error) {
      console.log(`users/login - ${error}`);
      return thunkAPI.rejectWithValue({
        message: "An error occurred during sign-in",
      });
    }
  }
);
