import React from "react";

const stateDefault = {
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  thongTinPhim: {},
  danhSachGhe: [],
};

const ThongTinDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BOOK_SEAT":
      // Create a new state object with the updated danhSachGheDangDat array
      return {
        ...state,
        danhSachGheDangDat: bookSeat(state.danhSachGheDangDat, action.ghe),
      };

    case "CANCEL_SEAT":
      // Create a new state object with the updated danhSachGheDangDat array
      return {
        ...state,
        danhSachGheDangDat: cancelSeat(state.danhSachGheDangDat, action.soGhe),
      };

    default:
      return state;
  }
};

// Helper function to handle booking a seat
const bookSeat = (danhSachGheDangDat, ghe) => {
  const index = danhSachGheDangDat.findIndex(
    (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
  );

  if (index !== -1) {
    // Seat exists, remove it
    return danhSachGheDangDat.filter(
      (gheDangDat) => gheDangDat.soGhe !== ghe.soGhe
    );
  } else {
    // Seat doesn't exist, add it
    return [...danhSachGheDangDat, ghe];
  }
};

// Helper function to handle canceling a seat
const cancelSeat = (danhSachGheDangDat, soGhe) => {
  const index = danhSachGheDangDat.findIndex(
    (gheDangDat) => gheDangDat.soGhe === soGhe
  );

  if (index !== -1) {
    // Seat exists, remove it
    return [
      ...danhSachGheDangDat.slice(0, index),
      ...danhSachGheDangDat.slice(index + 1),
    ];
  } else {
    // Seat doesn't exist, return the original array
    return danhSachGheDangDat;
  }
};

export default ThongTinDatVeReducer;
