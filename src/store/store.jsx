import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
