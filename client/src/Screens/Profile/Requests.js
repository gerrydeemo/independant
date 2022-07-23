import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Requests() {
    const [requests, setRequests] = useState([])
    useEffect(() => {
       Request() 
    },[])

    async function Request() {
        var storage = localStorage.getItem("userData")
        var email = JSON.parse(storage).email
        // post to http://localhost:5000/getRequests with email in body then get response and set requests to response
        const response = await fetch("http://localhost:5000/getRequests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            }),
        })
        const data = await response.json()
        console.log(data)
        setRequests(data)

        
    }
    
    
    return (
        <>
            <Navbar/>
            <SideBar/>
            <div className="mx-auto w-4/5 float-right ">
            {requests.map((request) => {
                return (
                <div className=" bg-white shadow-md  h-64 w-5/12 mt-5 mx-auto rounded-2xl">
                    <h1 className="text-left pl-10 pt-5 font-bold text-2xl ">{request.name}</h1>
                    <h1 className="text-left pl-10 pt-1 font-semibold text-sm">{request.location}</h1>
                </div>
                )
            })}
            </div>
        </>
    )
  }