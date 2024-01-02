import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { userServ } from "../../services/userServ";

const EditUser = () => {
  const { taiKhoan } = useParams();
  const [editUser, setEditUser] = useState([]);
  useEffect(() => {
    userServ
      .getInfoUser(taiKhoan)
      .then((res) => {
        setEditUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: editUser.taiKhoan,
      matKhau: editUser.matKhau,
      email: editUser.email,
      soDt: editUser.soDT,
      maLoaiNguoiDung: editUser.maLoaiNguoiDung,
      hoTen: editUser.hoTen,
      maNhom: editUser.maNhom,
    },
    onSubmit: (values) => {
      userServ
        .editUser(values)
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            navigate("/admin/manager-user");
          });
        })
        .catch((err) => {});
    },
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    reset,
  } = formik;
  return (
    <div className="px-20">
      <h2 className="font-bold text-2xl mb-5">Thay đổi thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10">
          {/* Tài khoản */}
          <div>
            <label
              htmlFor="taiKhoan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tài khoản
            </label>
            <input
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 btnEdit"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.taiKhoan}
              readOnly
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          {/* Mật khẩu */}
          <div>
            <label
              htmlFor="matKhau"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="matKhau"
              name="matKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.matKhau}
            />
          </div>
          {/* Số điện thoại */}
          <div>
            <label
              htmlFor="soDt"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="soDt"
              name="soDt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDt}
            />
          </div>
          {/* Họ tên */}
          <div>
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
          </div>
          {/* Loại người dùng */}
          <div>
            <div>
              <label
                htmlFor="maLoaiNguoiDung"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Loại người dùng
              </label>
              <select
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maLoaiNguoiDung}
              >
                <option selected value="">
                  Chọn loại người dùng
                </option>
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
            </div>
          </div>
          {/* Mã nhóm */}
          <div>
            <label
              htmlFor="maNhom"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mã nhóm
            </label>
            <input
              type="text"
              id="maNhom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maNhom}
            />
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <div>
            <NavLink to={`/admin/manager-user`}>
              <button
                style={{
                  borderBottom: "2px solid #3F83F8",
                }}
              >
                <i className="fa-solid fa-angles-left text-blue-500" />
                <span className="text-blue-500">Trở lại</span>
              </button>
            </NavLink>
          </div>
          <div>
            <button className="bg-green-500 px-4 py-2 rounded-md font-medium">
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
