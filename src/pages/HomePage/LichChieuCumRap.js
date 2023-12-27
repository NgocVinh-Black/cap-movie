import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapSer } from "../../services/quanLyRapSer";
import "./lichChieuCumRap.css";
import moment from "moment";
const LichChieuCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    // CGV
    // BHDStar
    quanLyRapSer
      .getInfoShowTimesTheater(maHeThongRap)
      .then((res) => {
        console.log(res);
        setCumRap(res.data.content[0]?.lstCumRap);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maHeThongRap]);

  return (
    <div className="cum_rap">
      <Tabs
        defaultActiveKey="1"
        style={{
          height: 400,
        }}
        tabPosition={"left"}
        items={cumRap.map((item, index) => {
          return {
            // thuộc tính label tạo nội dung cho các nút tab
            label: (
              <div className="text-left space-y-1 w-80">
                <h4 className="truncate text-lime-500 uppercase font-medium ">
                  {item.tenCumRap}
                </h4>
                <p className="truncate text-xs text-gray-400 uppercase">
                  {item.diaChi}
                </p>
                <p className="text-xs text-red-500">[Chi tiết]</p>
              </div>
            ),
            // key là khoá của tab, giúp cho một số chức năng sau này cần biết đang đứng ở tab nào
            key: index,
            // disabled giúp ngăn chặn người dùng bấm mở tab nếu giá trị là true
            // disabled: true,
            // children giúp hiển thị nội dung của tab mà chúng ta muốn
            children: (
              <div>
                {item.danhSachPhim.map((item, index) => {
                  return (
                    <div className="flex p-5">
                      <div className="w-2/12">
                        <img
                          className="object-cover h-56 border border-black shadow-md"
                          src={item.hinhAnh}
                          alt=""
                        />
                      </div>
                      <div className="w-10/12 px-5">
                        <div>
                          <h3 className="mb-3 text-lg font-bold">
                            <span className="text-white p-1 bg-orange-600 rounded mr-2">
                              C18
                            </span>
                            {item.tenPhim}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                          {item.lstLichChieuTheoPhim
                            .slice(0, 4)
                            .map((item, index) => {
                              return (
                                <div className="py-2 text-center duration-300 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                                  <span className="mr-2 font-medium text-lime-600">
                                    {moment(item.ngayChieuGioChieu).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </span>
                                  <span>~</span>
                                  <span className="ml-2 text-orange-600 font-medium">
                                    {moment(item.ngayChieuGioChieu).format(
                                      "hh:mm"
                                    )}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuCumRap;
