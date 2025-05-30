import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (region) => {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    if (region === "all") return response.data;

    const filteredCountries = response.data.filter(
      (country) =>
        country.region === region.charAt(0).toUpperCase() + region.slice(1)
    );

    return filteredCountries;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
