import { createSlice } from "@reduxjs/toolkit";
import { getLocalStore } from "../../utils/local";

const initialState = {
  chiTietPhongVe: {},
};

const datVeSlice = createSlice({
  name: "datVe",
  initialState,
  reducers: {
    setChiTietPhongVe: (state, action) => {
      state.chiTietPhongVe = action.payload;
    },
  },
});

export const { setChiTietPhongVe } = datVeSlice.actions;

export default datVeSlice.reducer;
