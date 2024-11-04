import { configureStore } from "@reduxjs/toolkit";
import materiReducer from "../Features/materiSlice";
import kategoriReducer from "../Features/kategoriSlice";

export const store = configureStore({
  reducer: {
    materi: materiReducer,
    kategori: kategoriReducer,
  },
});
