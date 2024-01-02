import React from "react";
import { quanLyDatVeService } from "../../services/quanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "./QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVeAction(
        maLichChieu
      );

      console.log("result", result);

      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
      console.log("error".error.response?.data);
    }
  };
};
