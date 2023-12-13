import React, { useState } from "react";
import ball from "../../image/ball.png";

const Header = (props) => {
  const getGameTitle = localStorage.getItem("gameTitle");
  return (
    <div>
      <header className=" sticky flex flex-row bg-lime-300 mt-6 mx-4 w-98% rounded-lg h-20">
        <h6 className=" flex pt-6 pl-10 font-bold">Play Zone {getGameTitle}</h6>

        <img
          style={{ paddingLeft: "80%", height: "80%", paddingTop: "14px" }}
          src={ball}
          alt="ball"
        ></img>
      </header>
    </div>
  );
};

export default Header;
