import React from "react";
import style from "./SeatList.scss";
import SeatItem from "./SeatItem";
import { useTicketContext } from "./TicketsContext";

export default function SeatList({ seatList }) {
  const { selectSeats, handleSelected } = useTicketContext();

  return (
    <div className={style.seatlist}>
      <div className="max-w-md mx-auto">
        <h6 className={style.screen}>MÀN HÌNH</h6>
        <div className={style.seatlistContent}>
          {seatList?.map((seat) => {
            const isSelected = selectSeats.find(
              (item) => item.maGhe === seat.maGhe
            );
            return (
              <SeatItem
                handleSelected={handleSelected}
                isSelected={isSelected}
                key={seat.maGhe}
                seat={seat}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
