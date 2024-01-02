import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStore } from "../../utils/local";
import BookTickets from "../../pages/BookTickets/BookTickets";

const CheckoutTemplate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = getLocalStore("user");
    if (user) {
      console.log(user);
    } else {
      return navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <BookTickets />
    </Fragment>
  );
};

export default CheckoutTemplate;
