import { https } from "./configServices";

export const quanLyRapSer = {
  getAllRap: () => {
    return https.get("api/QuanLyRap/LayThongTinHeThongRap");
  },
  getInfoShowTimesTheater: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    );
  },
};
