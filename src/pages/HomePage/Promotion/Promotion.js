import React from "react";
import SlidePromotion from "./SlidePromotion";
import "./Promotion.scss";

const Promotion = () => {
  return (
    <section className="promotionBg" id="Khuyến Mãi">
      <h3 className="promotionTitle">KHUYẾN MÃI</h3>
      <div className="container">
        <SlidePromotion />
      </div>
    </section>
  );
};

export default Promotion;
