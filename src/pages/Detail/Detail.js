import React, { useEffect, useState } from "react";
import Header from "../../templates/UserTemplate/Header";
import LichChieuRap from "../HomePage/LichChieuRap";
import Footer from "../../templates/UserTemplate/Footer";
import { quanLyPhimSer } from "../../services/quanLyPhimSer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail.css";
const Detail = () => {
  const { maPhim } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  useEffect(() => {
    quanLyPhimSer
      .getInfoMovie(maPhim)
      .then((res) => {
        setDetailMovie(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="bg_detail">
        <div
          style={{
            padding: "50px 300px",
          }}
        >
          <div className="flex">
            <div className="basis-4/12">
              <img
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "80px 20px",
                }}
                src={detailMovie.hinhAnh}
                alt=""
              />
            </div>
            <div
              className="basis-8/12 space-y-4"
              style={{
                paddingLeft: "50px",
                color: "white",
              }}
            >
              <h2 className="text-3xl">{detailMovie.tenPhim}</h2>
              <p>{detailMovie.trailer}</p>
              <p>
                Mô tả: <span>{detailMovie.moTa}</span>
              </p>
              {detailMovie.hot ? (
                <div className="flex">
                  <p
                    style={{
                      fontWeight: "800",
                      color: "red",
                    }}
                  >
                    Hot
                  </p>
                  <div className="fire">
                    <div className="fire-left">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-main">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-right">
                      <div className="main-fire" />
                      <div className="particle-fire" />
                    </div>
                    <div className="fire-bottom">
                      <div className="main-fire" />
                    </div>
                  </div>
                </div>
              ) : (
                <p>Bình thường</p>
              )}
              {detailMovie.dangChieu ? <p>Đang chiếu</p> : <p>Đang cập nhập</p>}
              <p>{detailMovie.ngayKhoiChieu}</p>
              <div>
                <p>Đánh giá</p>
                <fieldset className="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    defaultValue={5}
                  />
                  <label
                    className="full"
                    htmlFor="star5"
                    title="Awesome - 5 stars"
                  />
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    defaultValue="4 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star4half"
                    title="Pretty good - 4.5 stars"
                  />
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    defaultValue={4}
                  />
                  <label
                    className="full"
                    htmlFor="star4"
                    title="Pretty good - 4 stars"
                  />
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    defaultValue="3 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star3half"
                    title="Meh - 3.5 stars"
                  />
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    defaultValue={3}
                  />
                  <label
                    className="full"
                    htmlFor="star3"
                    title="Meh - 3 stars"
                  />
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    defaultValue="2 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star2half"
                    title="Kinda bad - 2.5 stars"
                  />
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    defaultValue={2}
                  />
                  <label
                    className="full"
                    htmlFor="star2"
                    title="Kinda bad - 2 stars"
                  />
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    defaultValue="1 and a half"
                  />
                  <label
                    className="half"
                    htmlFor="star1half"
                    title="Meh - 1.5 stars"
                  />
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    defaultValue={1}
                  />
                  <label
                    className="full"
                    htmlFor="star1"
                    title="Sucks big time - 1 star"
                  />
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    defaultValue="half"
                  />
                  <label
                    className="half"
                    htmlFor="starhalf"
                    title="Sucks big time - 0.5 stars"
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LichChieuRap />
      <Footer />
    </div>
  );
};

export default Detail;
