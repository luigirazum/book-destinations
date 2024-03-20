import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "./destinations/destinationsSlice";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return {
        allDestinations: [],
        loading: false,
        error: null,
        isDestinationFetched: false,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    destinations: destinationsSlice,
  },
  preloadedState: {
    destinations: { ...loadStateFromLocalStorage() },
  },
});

export default store;
