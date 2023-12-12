import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Booking() {
  console.log("Booking done");
  const navigate = useNavigate();
  return (
    <div>
      Booking
      <Button
        label="Back"
        onClick={() => {
          navigate('/');
        }}
      ></Button>
    </div>
  );
}

export default Booking;
