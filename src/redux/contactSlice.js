import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendContactForm = createAsyncThunk(
  "contact/sendForm",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
