import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
import ListMovie from "./ListMovie";
import Promotion from "./Promotion/Promotion";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListMovie />
      <LichChieuRap />
      <Promotion />
    </div>
  );
};

export default HomePage;
