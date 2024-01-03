import { https } from "./configServices";

export const userServ = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
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

export async function updateUser(payload) {
  try {
    const response = await https.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      payload
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
