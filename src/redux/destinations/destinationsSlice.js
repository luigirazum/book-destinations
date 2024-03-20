import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDestinations = createAsyncThunk(
  "destinations-fetcher",
  async () => {
    const destinations = await axios.get(
      "http://localhost:4000/api/v1/destinations/"
    );
    return destinations.data;
  }
);

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    alert("An error occurred while saving your data. Please try again later.");
  }
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    allDestinations: [],
    loading: false,
    error: null,
    isDestinationFetched: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(fetchDestinations.fulfilled, (state, action) => {
        const newState = {
          ...state,
          loading: false,
          allDestinations: action.payload,
          isDestinationFetched: true,
        };
        saveStateToLocalStorage(newState);
        return newState;
      })

      .addCase(fetchDestinations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default destinationsSlice.reducer;
