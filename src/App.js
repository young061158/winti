import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SeatSelection from "./components/User_Reservation/SeatSelection";
import SelectPrice from "./components/User_Reservation/SelectPrice";
import { Modal } from "bootstrap";
import Payments from "./components/User_Reservation/Payments";
import Payment from "./components/Payment";
import Management from "./components/Management";
import ShowDetails from "./components/User_Reservation/showdetail/ShowDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/seatselection" element={<SeatSelection />}/>
        <Route path="/"element={<Management/>}/>
        <Route path="/detail" element={<ShowDetails/>}/>


      </Routes>
    </div>
  );
}

export default App;
