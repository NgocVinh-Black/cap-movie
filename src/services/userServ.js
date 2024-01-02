import { https } from "./configServices";

export const userServ = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },

  updateUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  },

  layThongTinTaiKhoan: () => {
    return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
};

export async function bookingHistory(payload) {
  try {
    const response = await https.post(
      "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      payload
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
