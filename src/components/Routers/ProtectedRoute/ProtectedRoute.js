// import React from "react";

// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useUserContext } from "../../../pages/Booking/UserContext";

// export default function ProtectedRoute({ children }) {
//   const location = useLocation();
//   const { currentUser } = useUserContext();
//   // Kiểm tra user đã đăng nhập chưa
//   if (!currentUser) {
//     return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
//   }

//   return children || <Outlet />;
// }
