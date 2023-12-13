import React, { useState } from "react";

import basketball from "../../image/basketball.jpg";
import cricket from "../../image/cricket.jpg";
import football from "../../image/football.jpg";
import Volleyball from "../../image/Volleyball.jpg";
import Button from "../Button";
import HomePage from "./HomePage";
import Booking from "./Booking";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import { useNavigate } from 'react-router-dom';

const SportsCards = () => {
  const navigate = useNavigate();
  const [BookNow, setBookNow] = useState(true);
  const [isBookNow, setIsBookNow] = useState(false);

  const sport = [
    {
      id: 0,
      img: basketball,
      title: "Basketball",
    },
    {
      id: 1,
      img: cricket,
      title: "Cricket",
    },
    {
      id: 2,
      img: football,
      title: "Football",
    },
    {
      id: 3,
      img: Volleyball,
      title: "Volleyball",
    },
  ];

  const onClickHandle = (index) => {
    navigate("/booking");
    localStorage.setItem("gameTitle", sport[index].title);
  };

  return (
    <div className="flex flex-row w-20% mt-12">
      {sport.map((card, index, title) => (
        <div
          className="flex flex-col mx-6 bg-white w-full h-100% rounded-lg"
          key={index}
        >
          <img
            className="flex justify-center w-80 h-80 pl-4 pt-6"
            src={card.img}
            alt="images"
          ></img>
          <p className="flex justify-center mt-4">{card.title}</p>
          {/* <button className='flex  w-28 h-10  bg-neutral-600 text-white pl-4 pt-1.5 rounded-lg ' style={{marginLeft:'35%', marginTop:'20px', marginBottom:'40px',}}>Book Now</button> */}

          <Button
            label="Book Now"
            book={BookNow}
            onClick={() => {
              onClickHandle(index);
            }}
          ></Button>
        </div>
      ))}
    </div>
  );
};

export default SportsCards;
