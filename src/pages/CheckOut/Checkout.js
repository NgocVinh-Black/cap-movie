import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { layChiTietPhongVeAction } from "../../redux/Reducer/QuanLyDatVeActions";

const Checkout = (props) => {
  const { user } = useSelector((state) => state.userSlice);

  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  console.log(chiTietPhongVe);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match && props.match.params) {
      const action = layChiTietPhongVeAction(props.match.params.id);

      dispatch(action);
    }
  }, []);

  console.log(chiTietPhongVe);

  return (
    <div>
      <div className="min-h-screen mt-5">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="flex flex-col items-center">
              <div
                className="bg-black"
                style={{ width: "80%", height: 15 }}
              ></div>
              <div className={`${style["trapezoid"]} text-center`}>
                <h3 className="mt-3 text-black">Màn hình</h3>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-center text-green-400 text-2xl">0 vnd</h3>
            <hr />
            <h3 className="text-xl mt-2">Lật mặt 48h</h3>
            <p>Địa điểm: BHD Star - Vincom 3/2</p>
            <p>Ngày chiếu: 25/04/2023 - 12:05 RẠP 5</p>
            <hr />
            <div className="flex flex-row my-5">
              <div className="w-4/5">
                <span className="text-red-400 text-lg">Ghế</span>
              </div>
              <div className="text-right col-span-1">
                <span className="text-green-800 text-lg">0 vnd</span>
              </div>
            </div>
            <hr />

            <div className="my-5">
              <i>Email</i> <br />
              {user.email}
            </div>
            <hr />

            <div className="my-5">
              <i>Phone</i> <br />
              {user.soDT}
            </div>
            <hr />

            <div className="mb-0 h-full flex flex-col justify-end items-center">
              <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl rounded  ">
                ĐẶT VÉ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
