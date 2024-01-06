import dayjs from "dayjs";
import React from "react";

export default function ButtonTime({ movieTime }) {
  const time = dayjs(movieTime.ngayChieuGioChieu).format("DD-MM-YYYY ~ HH:mm");

  return (
    <p
      style={{
        padding: "8px",
        textAlign: "center",
        duration: "300ms",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "0.375rem",
        cursor: "pointer",
      }}
      className="hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
    >
      <span
        style={{ marginRight: "8px", fontWeight: "500", color: "#38a169" }}
        className="text-base hover:text-base focus:text-base"
      >
        {time}
      </span>
    </p>
  );
}
