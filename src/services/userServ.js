import { https } from "./configServices";

export const userServ = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
};
