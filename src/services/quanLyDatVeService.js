import { https } from "./configServices";

export const quanLyDatVeService = {
  layChiTietPhongVe: (maLichChieu) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
};
