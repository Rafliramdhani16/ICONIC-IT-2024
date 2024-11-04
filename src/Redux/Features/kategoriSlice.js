import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchKategori,
  createKategori,
  editKategori,
  deleteKategori, // Menggunakan "deleteKategori" untuk konsistensi
} from "../../Services/Dashboard";

// Async thunks
export const fetchKategoriList = createAsyncThunk(
  "kategori/fetchKategoriList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchKategori();
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createKategoriAsync = createAsyncThunk(
  "kategori/createKategori",
  async (kategoriData, { rejectWithValue }) => {
    try {
      const response = await createKategori(kategoriData);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateKategoriAsync = createAsyncThunk(
  "kategori/updateKategori",
  async ({ kategoriId, kategoriData }, { rejectWithValue }) => {
    try {
      const response = await editKategori(kategoriId, kategoriData);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteKategoriAsync = createAsyncThunk(
  "kategori/deleteKategori", // Mengubah "removeKategoriAsync" menjadi "deleteKategoriAsync"
  async (kategoriId, { rejectWithValue }) => {
    try {
      const response = await deleteKategori(kategoriId);
      if (!response.success) {
        return rejectWithValue(response.message);
      }
      return kategoriId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const kategoriSlice = createSlice({
  name: "kategori",
  initialState: {
    kategoriList: [],
    loading: false,
    error: null,
    success: null,
    isFetching: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKategoriList.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(fetchKategoriList.fulfilled, (state, action) => {
        state.isFetching = false;
        state.kategoriList = action.payload;
      })
      .addCase(fetchKategoriList.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      // Create Kategori
      .addCase(createKategoriAsync.pending, (state) => {
        state.isCreating = true;
        state.error = null;
      })
      .addCase(createKategoriAsync.fulfilled, (state, action) => {
        state.isCreating = false;
        state.kategoriList.push(action.payload);
      })
      .addCase(createKategoriAsync.rejected, (state, action) => {
        state.isCreating = false;
        state.error = action.payload;
      })
      // Update Kategori
      .addCase(updateKategoriAsync.pending, (state) => {
        state.isUpdating = true;
        state.error = null;
      })
      .addCase(updateKategoriAsync.fulfilled, (state, action) => {
        state.isUpdating = false;
        const index = state.kategoriList.findIndex(
          (kategori) => kategori.uuid === action.payload.uuid
        );
        if (index !== -1) {
          state.kategoriList[index] = action.payload;
        }
      })
      .addCase(updateKategoriAsync.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      })
      // Delete Kategori
      .addCase(deleteKategoriAsync.pending, (state) => {
        state.isDeleting = true;
        state.error = null;
      })
      .addCase(deleteKategoriAsync.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.kategoriList = state.kategoriList.filter(
          (kategori) => kategori.uuid !== action.payload
        );
      })
      .addCase(deleteKategoriAsync.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = kategoriSlice.actions;
export default kategoriSlice.reducer;
