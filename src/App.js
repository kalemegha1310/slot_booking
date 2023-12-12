import { Routes, Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Componant/HomePage/HomePage";
import Booking from "./Componant/HomePage/Booking";
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/booking' element={<Booking></Booking>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
