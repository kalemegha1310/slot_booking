import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./HomePage/Booking";


function Router() {
  const navigate=useNavigate();
  return (
    <div>
      <Routes>
        <Route path='/Booking' element={<Booking></Booking>}></Route>
      </Routes>
      <button onClick={()=>{navigate('/Booking')}}>Navigate</button>
    </div>
  );
}

export default Router;
