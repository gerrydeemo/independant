import './App.css';
import {useNavigate, Routes, Route, useLocation} from 'react-router-dom';
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Jobs from "./Screens/Profile/Jobs";
import Offers from "./Screens/Profile/Offers";
import Requests from "./Screens/Profile/Requests";
import Settings from "./Screens/Profile/Settings";
import Pay from "./Screens/ProfileEmployment/Pay";
import Holidays from "./Screens/ProfileEmployment/Holidays";
import Employment from "./Screens/ProfileEmployment/Employment";
import React,{useEffect, useState} from "react"

import AdminLogin from "./Screens/Admin/AdminLogin";
import JoinRequests from "./Screens/Admin/JoinRequests";
import Employees from "./Screens/Admin/Employees";
import EmployeeHolidays from "./Screens/Admin/EmployeeHolidays";

function App() {
  const navigate = useNavigate();
  // check if userData is in localStorage if not redirect to login page
  useEffect(() => {
    const userData = localStorage.getItem('userData')
    if(!userData){
      navigate("/login")
    }
    else if(window.location.pathname === "/"){
      navigate("/login")
    }
  }, [])
  return (
    <div className="App h-screen">
      
        <Routes>
        {/*employee*/}
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/requests" element={<Requests />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pay&benefits" element={<Pay />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/employment" element={<Employment />} />
          {/*admin*/}
          <Route path="adminLogin" element={<AdminLogin />} />
          <Route path="JoinRequests" element={<JoinRequests />} />
          <Route path="Employee" element={<Employees />} />
          <Route path="EmployeeHolidays" element={<EmployeeHolidays/>} />
        </Routes>

    </div>
  );
}

export default App;
