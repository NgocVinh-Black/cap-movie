import React from "react";
import "./SeatItem.scss";

export default function SeatItem({ seat, handleSelected, isSelected }) {
  const { daDat, loaiGhe, tenGhe } = seat;

  const handleClick = () => {
    const fieldName = "selectedSeats"; // Adjust the field name accordingly
    const updatedValue = [...handleSelected.values.selectedSeats, seat];

    handleSelected.setFieldValue(fieldName, updatedValue);
  };

  return (
    <button
      onClick={handleClick}
      className={`seatTicket ${daDat ? "seatIsBooked" : ""} ${
        !daDat && loaiGhe === "Vip" ? "seatVip" : ""
      } ${!daDat && isSelected ? "seatIsSelected" : ""}`}
      disabled={daDat}
    >
      {daDat ? "X" : `${tenGhe}`}
    </button>
  );
}
