import React, { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addDays } from "date-fns";

function Booking() {
  const [btnCss, setBtnCss] = useState(true);
  const [calDate, setCalDate] = useState(new Date());
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    localStorage.removeItem("gameTitle");
  };
  function onChange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate);
    console.log("Date:0", calDate);
  }
  const todays = new Date();
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row justify-start pl-16 pt-32  gap-60">
        <Calendar
          onChange={onChange}
          value={calDate}
          minDate={new Date()} // Set minimum date to today
          maxDate={addDays(new Date(), 20)}
        ></Calendar>
        <p className="pt-32">
          Booking has been closed. Book your slot for tommrrow's date
        </p>
      </div>
      <Button label="Back" onClick={handleBack} book={btnCss}></Button>
    </div>
  );
}

export default Booking;
