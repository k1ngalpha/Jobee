import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:3000";

export const addListing = createAsyncThunk(
  "add-listing",
  async (
    {
      job_title,
      company_name,
      job_type,
      job_description,
      salary,
      about_company,
    },
    thunkAPI
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/add-listing`, {
        method: "POST",
        //credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_title,
          company_name,
          job_type,
          job_description,
          salary,
          about_company,
        }),
      });
      //(response.status >= 200 && response.status < 300)
      if (response.ok) {
        const res = await response.json();
        return res;
      } else {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      }
    } catch (error) {
      console.log(`api/add-listing - ${error}`);
      return thunkAPI.rejectWithValue({
        message: "An error occurred during adding the job",
      });
    }
  }
);

export const allListing = createAsyncThunk(
  "all-listing",
  async (page, thunkAPI) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/all-listing?page=${page}`,
        {
          method: "GET",
          //credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const res = await response.json();
        return res;
      } else {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error);
      }
    } catch (error) {
      console.log(`api/all-listing - ${error}`);
      return thunkAPI.rejectWithValue({
        message: "An error occurred during fetching all jobs",
      });
    }
  }
);
