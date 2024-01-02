import { SET_CHI_TIET_PHONG_VE } from "./QuanLyDatVeType";
import { ThongTinLichchieu } from "../../pages/BookTickets/InfoPhongVe";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichchieu(),
  rapPhim: {},
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE:
      return {
        ...state,
        chiTietPhongVe: action.chiTietPhongVe,
      };
    default:
      return state;
  }
};
