import React from "react";

import SportsCards from "./SportsCards";
import Button from "../Button";
import Header from "./Header";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <SportsCards></SportsCards>
      <Button label="Check your Booking"></Button>
    </div>
  );
}

export default HomePage;
