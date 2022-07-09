import './App.css';
import {useNavigate, Routes, Route, useLocation} from 'react-router-dom';
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Jobs from "./Screens/Profile/Jobs";
import Offers from "./Screens/Profile/Offers";
import Requests from "./Screens/Profile/Requests";
import Settings from "./Screens/Profile/Settings";
import React,{useEffect, useState} from "react"

//test

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if(window.location.pathname === "/profile"){
      navigate("/profile/jobs")
    }
  },[])
  
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile/jobs" element={<Jobs />} />
          <Route exact path="/profile/offers" element={<Offers />} />
          <Route exact path="/profile/requests" element={<Requests />} />
          <Route exact path="/profile/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

    </div>
  );
}

export default App;
