import { configureStore } from "@reduxjs/toolkit";
import materiReducer from "../Features/materiSlice";

export const store = configureStore({
  reducer: {
    materi: materiReducer,
  },
});
