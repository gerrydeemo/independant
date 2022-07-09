import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Requests() {
    useEffect(() => {
        localStorage.setItem("pageName", JSON.stringify("Requests"))
      })
    const Request = () => {
        return (
        <div>
            <h1>My Requests</h1>
        </div>
        )
    }
    return (
        <>
            <Navbar/>
            <SideBar/>
            <Request/>
        </>
    )
  }