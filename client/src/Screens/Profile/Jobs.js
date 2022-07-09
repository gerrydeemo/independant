import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Jobs () {
  useEffect(() => {
    localStorage.setItem("pageName", JSON.stringify("Jobs"))
  })
    const Job = () => {
    return (
      <div>
        <h1>My Jobs</h1>
      </div>
    )
    }
    return (
        <>
            <Navbar/>
            <SideBar/>
            <Job/>
        </>
    )
  }