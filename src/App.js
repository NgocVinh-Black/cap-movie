import { DatePicker } from "antd";

// react-router-dom
import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import MovieManager from "./pages/MovieManager/MovieManager";
import UserManager from "./pages/UserManager/UserManager";
import AddMovie from "./pages/AddMovie/AddMovie";
import Tickets from "./pages/Booking/Tickets";
// import Checkout from "./pages/CheckOut/Checkout";
import BookTickets from "./pages/BookTickets/BookTickets";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
// import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index></Route>
        </Route>
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManager />} />
          <Route path="manager-user" element={<UserManager />} />
          <Route path="add-movie" element={<AddMovie />} />
        </Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<CheckoutTemplate />} path="/checkout">
          <Route element={<BookTickets />} path=":id" />
        </Route>
        <Route element={<Tickets />} path="/tickets/:showtimeId" />
        {/* <Route element={<Checkout />} path="/checkout/:id" /> */}
      </Routes>
    </>
  );
}

export default App;
