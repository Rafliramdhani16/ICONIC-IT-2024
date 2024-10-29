import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";
const getToken = () => sessionStorage.getItem("token");

// Async Thunks
export const fetchMateriList = createAsyncThunk(
  "materi/fetchMateriList",
  async (_, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return rejectWithValue("Token tidak tersedia.");
    }

    try {
      const response = await axios.get(`${API_URL}/dashboard/materi/all`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching materi"
      );
    }
  }
);

export const createMateri = createAsyncThunk(
  "materi/createMateri",
  async (materiData, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return rejectWithValue("Token tidak tersedia.");
    }

    try {
      const response = await axios.post(
        `${API_URL}/dashboard/materi/create`,
        materiData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error creating materi"
      );
    }
  }
);

export const updateMateri = createAsyncThunk(
  "materi/updateMateri",
  async ({ id, userData }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return rejectWithValue("Token tidak tersedia.");
    }

    try {
      const response = await axios.put(
        `${API_URL}/dashboard/materi/${id}/edit`,
        userData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error updating materi"
      );
    }
  }
);

export const removeMateri = createAsyncThunk(
  "materi/removeMateri",
  async (id, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return rejectWithValue("Token tidak tersedia.");
    }

    try {
      await axios.delete(`${API_URL}/dashboard/materi/${id}/delete`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error deleting materi"
      );
    }
  }
);

const materiSlice = createSlice({
  name: "materi",
  initialState: {
    materiList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMateriList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMateriList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.materiList = action.payload;
      })
      .addCase(fetchMateriList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createMateri.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMateri.fulfilled, (state, action) => {
        state.isLoading = false;
        state.materiList.push(action.payload);
      })
      .addCase(createMateri.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateMateri.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateMateri.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.materiList.findIndex(
          (materi) => materi.uuid === action.payload.uuid
        );
        if (index !== -1) {
          state.materiList[index] = action.payload;
        }
      })
      .addCase(updateMateri.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeMateri.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeMateri.fulfilled, (state, action) => {
        state.isLoading = false;
        state.materiList = state.materiList.filter(
          (materi) => materi.uuid !== action.payload
        );
      })
      .addCase(removeMateri.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = materiSlice.actions;
export default materiSlice.reducer;
