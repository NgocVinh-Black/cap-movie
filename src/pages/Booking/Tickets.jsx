import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTickets } from "../../services/quanlyticket";
import { Grid, Button } from "antd";
import { useFormik } from "formik";
import DetailSeat from "./DetailSeat";
import SeatList from "./SeatList";
import style from "./Tickets.scss";
import Loading from "../../components/Loading/Loading";
import TicketsErrorBoundary from "./TicketsErrorBoundary";

const Tickets = () => {
  const { showtimeId } = useParams();
  const [ticketsList, setTicketsList] = useState({
    danhSachGhe: [],
    thongTinPhim: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Showtime ID:", showtimeId);
    const fetchTickets = async () => {
      try {
        const data = await getTickets(showtimeId);
        console.log("Tickets data:", data);
        setTicketsList(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, [showtimeId]);

  const formik = useFormik({
    initialValues: {
      selectedSeats: [],
    },
    onSubmit: (values) => {
      // Handle form submission logic
      console.log("Selected seats:", values.selectedSeats);
    },
  });

  console.log("Tickets List:", ticketsList);

  if (isLoading) {
    return <Loading />;
  }

  console.log("Rendering Tickets component...");

  return (
    <TicketsErrorBoundary>
      <div className={style.tickets}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <SeatList
              seatList={ticketsList.danhSachGhe}
              handleSelected={formik.setFieldValue}
              selectedSeats={formik.values.selectedSeats}
            />
            <div className={style.btnList}>
              <div className={style.btnGroup}>
                <Button className={`${style.btnDisable} ${style.btnItem}`}>
                  X
                </Button>
                <p>Đã đặt</p>
              </div>
              <div className={style.btnGroup}>
                <Button className={style.btnItem}></Button>
                <p>Thường</p>
              </div>
              <div className={style.btnGroup}>
                <Button className={`${style.btnVip} ${style.btnItem}`}></Button>
                <p>Vip</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <DetailSeat infoCinema={ticketsList.thongTinPhim} />
          </Grid>
        </Grid>
      </div>
    </TicketsErrorBoundary>
  );

  // return (
  //   <div>
  //     <div className="min-h-screen mt-5">
  //       <div className="grid grid-cols-12">
  //         <div className="col-span-9">
  //           <div className="flex flex-col items-center">
  //             <div
  //               className="bg-black"
  //               style={{ width: "80%", height: 15 }}
  //             ></div>
  //             <div className={`${style["trapezoid"]} text-center`}>
  //               <h3 className="mt-3 text-black">Màn hình</h3>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-span-3">
  //           <h3 className="text-center text-green-400 text-2xl">
  //             {ticketsList.giaTien}
  //           </h3>
  //           <hr />
  //           <h3 className="text-xl mt-2">{ticketsList.tenPhim}</h3>
  //           <p>
  //             Địa điểm: {ticketsList.tenCumRap} - {ticketsList.tenRap}
  //           </p>
  //           <p>
  //             {ticketsList.ngayChieu} - {ticketsList.gioChieu} -{" "}
  //             {ticketsList.tenRap}
  //           </p>
  //           <hr />
  //           <div className="flex flex-row my-5">
  //             <div className="w-4/5">
  //               <span className="text-red-400 text-lg">Ghế</span>
  //             </div>
  //             <div className="text-right col-span-1">
  //               <span className="text-green-800 text-lg">0 vnd</span>
  //             </div>
  //           </div>
  //           <hr />

  //           <div className="my-5">
  //             <i>Email</i> <br />
  //             {/* {user.email} */}
  //           </div>
  //           <hr />

  //           <div className="my-5">
  //             <i>Phone</i> <br />
  //             {/* {user.soDT} */}
  //           </div>
  //           <hr />

  //           <div className="mb-0 h-full flex flex-col justify-end items-center">
  //             <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl rounded  ">
  //               ĐẶT VÉ
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Tickets;
