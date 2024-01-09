import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

const UserTemplate = () => {
  const { isActive } = useSelector((state) => state.loadingSlice);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isActive ? <Loading /> : null}
      {/* <Loading/> */}
      <div>
        <Header />
        <Outlet />
        <Footer />
        {showBackToTop && (
          <div
            onClick={handleBackToTop}
            className="back-to-top-button"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                backgroundColor: "green", // Change the background color as needed
                borderRadius: "20%",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-angle-up"
                style={{ fontSize: "20px", color: "#fff" }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserTemplate;
