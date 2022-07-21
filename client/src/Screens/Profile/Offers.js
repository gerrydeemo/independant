import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar'
import { useNavigate } from 'react-router-dom';
import React,{ useState,useEffect } from 'react';

export default function Offers() {
    const Offer = () => {
        return (
        <div>
            <h1>My Offers</h1>
        </div>
    )
    }
    return (
        <>
            <Navbar/>
            <SideBar/>
            <Offer/>
        </>
    )
  }
