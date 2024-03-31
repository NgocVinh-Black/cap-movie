import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/scss/navigation";
// import required modules
import { Pagination } from "swiper/modules";
import "./SlidePromotion.scss";

export default function SlideMovie() {
  const promotion = [
    <img
      alt=""
      className="slideImg"
      src={`${process.env.PUBLIC_URL}/img/happyday.png`}
    />,
    <img
      alt=""
      className="slideImg"
      src={`${process.env.PUBLIC_URL}/img/Rectangle-19.png`}
    />,
    <img
      alt=""
      className="slideImg"
      src={`${process.env.PUBLIC_URL}/img/Rectangle-21.png`}
    />,
    <img
      alt=""
      className="slideImg"
      src={`${process.env.PUBLIC_URL}/img/Rectangle-18.png`}
    />,
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-color": "#45ab3c",
          background: "#FFFFFF",
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <ul>
          {promotion.map((item, index) => (
            <SwiperSlide key={index}>
              <li className="slideItem">{item}</li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
}
