import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMateri,
  addMateri,
  editMateri,
  deleteMateri,
} from "../../Services/Dashboard";

// Async thunks
export const fetchMateriList = createAsyncThunk(
  "materi/fetchMateriList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchMateri();
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createMateri = createAsyncThunk(
  "materi/createMateri",
  async (materiData, { rejectWithValue }) => {
    try {
      const response = await addMateri(materiData);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateMateri = createAsyncThunk(
  "materi/updateMateri",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await editMateri(id, userData);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeMateri = createAsyncThunk(
  "materi/removeMateri",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteMateri(id);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const materiSlice = createSlice({
  name: "materi",
  initialState: {
    materiList: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Materi
      .addCase(fetchMateriList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMateriList.fulfilled, (state, action) => {
        state.loading = false;
        state.materiList = action.payload;
      })
      .addCase(fetchMateriList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create Materi
      .addCase(createMateri.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMateri.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createMateri.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Materi
      .addCase(updateMateri.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMateri.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateMateri.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Remove Materi
      .addCase(removeMateri.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeMateri.fulfilled, (state, action) => {
        state.loading = false;
        state.materiList = state.materiList.filter(
          (materi) => materi.uuid !== action.payload
        );
      })
      .addCase(removeMateri.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = materiSlice.actions;
export default materiSlice.reducer;
