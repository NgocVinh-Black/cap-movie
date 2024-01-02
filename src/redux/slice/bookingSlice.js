import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyRapSer } from "../../services/quanLyRapSer";
import { ThongTinLichchieu } from "../../pages/BookTickets/InfoPhongVe";

export const getListTicketRoomApi = createAsyncThunk(
  "ticket/getListTicketRoomApi",
  async (maLichChieu) => {
    try {
      const res = await quanLyRapSer.getListTicketRoom(maLichChieu);
      console.log("API Response:", res.data);
      return res.data.content;
    } catch (error) {
      console.error("API Error:", error);
      throw error; // Rethrow the error to be handled in the component
    }
  }
);
export const getControlTicketApi = createAsyncThunk(
  "ticket/getControlTicketApi",
  async (infoBooking) => {
    try {
      const res = await quanLyRapSer.getControlTicket(infoBooking);
      console.log("res:", res);

      alert("Đặt vé thành công");
      return res.data.content;
    } catch (error) {
      alert("Đặt vé thất bại");
      console.log("error", error);
    }
  }
);

const initialState = {
  rapPhim: new ThongTinLichchieu(),
  danhSachGheDangDat: [],
  // ghế đã đặt cho vào 1 array r để lên redux, xong mang xuống check ở dưới dạch sách ghế đã render, nếu trùng gì mình css cho nó là đã đặt
  controlBooking: {},
};

export const bookingSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    layInfoGhe: (state, action) => {
      console.log(state);
      let index = state.danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.tenGhe == action.payload.tenGhe
      );
      if (index != -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListTicketRoomApi.fulfilled, (state, action) => {
      console.log("Redux State after getListTicketRoomApi:", state);
      console.log("API Response for getListTicketRoomApi:", action.payload);
      state.rapPhim = action.payload;
    });
    // builder.addCase(getListTicketRoomApi.rejected, (state, action) => {
    //   // console.log("action: ", action);
    // });
    builder.addCase(getControlTicketApi.fulfilled, (state, action) => {
      console.log("Redux State after getControlTicketApi:", state);
      console.log("API Response for getControlTicketApi:", action.payload);
      state.controlBooking = action.payload;
    });
  },
});

export const { layInfoGhe } = bookingSlice.actions;
// để sử dụng trong component

export default bookingSlice.reducer;
// import trong store của redux
