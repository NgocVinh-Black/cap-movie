import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import movieSlice from "./slice/movieSlice";
import loadingSlice from "./slice/loadingSlice";
// import datVeSlice from "./slice/datVeSlice";
import { QuanLyDatVeReducer } from "./Reducer/QuanLyDatVeReducer";

export const store = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    loadingSlice,
    QuanLyDatVeReducer,
  },
});
