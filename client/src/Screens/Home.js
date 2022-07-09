import React,{useState, useEffect} from 'react'
import Navbar from "../Components/Navbar"
import Logo from "../assets/logo.png";
import LogoDark from "../assets/logoblack.png";
import { useNavigate } from 'react-router-dom';
import LogoBlack from "../assets/logoblack.png";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";


export default function Home() {


    const [shops, setShops] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
      const userData = localStorage.getItem("userData")
      console.log(userData)
      if (userData === null) {
          navigate("/login")
      }
      fetchData()
      localStorage.setItem("pageName", JSON.stringify("Home"))
    },[])

    async function fetchData() {
      const response = await fetch("http://localhost:5000/shops");
      const data = await response.json();
      console.log(data)
      setShops(data)
      
    }
    const Inp = (shop) => {

      const handleRequest = (shop) => {

        
        var name = shop.shop.name
        var id = shop.shop._id
        var location = shop.shop.location
        var storage = localStorage.getItem("userData")
        var email = JSON.parse(storage).email
        
        try {
          fetch("http://localhost:5000/request", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              id: id,
              location: location,
              email: email
            }),
          })
        } catch (error) {
          console.log(error)
        }
        window.location.reload()
      }

      const loop = () => {
        for (let i = 0; i < shop.shop.users.length; i++) {
          // output the value that will increase
          if (shop.shop.users[i].email === JSON.parse(localStorage.getItem("userData")).email) {
            return i
          }

        }
      }
      const request = () => {
        var storage = localStorage.getItem("userData")
        var email = JSON.parse(storage).email
        var user = shop.shop.users.map((user) => {
          var item = user.email
          if(item.includes(email)){
            return true
          }
          else {
            return false
          }
        })
          return user[loop()]
      }
      console.log(request())
      return(
        <input 
        disabled={request() ? true: false} 
        onClick={() => handleRequest(shop)} 
        type="submit" 
        className={request() ? "bg-white w-2/4 border-2 border-black h-12 rounded-2xl font-semibold pl-3 text-black placeholder:text-white" : "bg-black w-2/4 border-2 border-black h-12 rounded-2xl font-semibold pl-3 text-white placeholder:text-white cursor-pointer hover:bg-white hover:text-black" } 
        value={request() ? "Requested" : "Request To Join"}
        />
      )

    }
    return(
    <>
        <Navbar/>
        <div className="flex justify-center items-center w-full list-item mt-3">
          <input type="text" onChange={(e) => console.log(e.target.value)} className="bg-black w-2/4 h-12 rounded-2xl font-semibold pl-3 text-white placeholder:text-white " placeholder="Search..."/>

          {shops.map((shop) => {
            return (
            <div className="bg-white border-2 border-black h-64 w-2/4 mt-5 mx-auto rounded-2xl">
            <h1 className="text-left pl-10 pt-5 font-bold text-2xl">{shop.name}</h1>
            <h1 className="text-left pl-10 pt-1 font-semibold text-sm">{shop.location}</h1>
            <h1 className="text-left pl-10 pt-1 font-semibold text-xs">Please Confirm This Is The Correct Shop Before Requesting</h1>
            <div className="flex item-center justify-center mt-20">
              <Inp shop={shop}/>
            </div>
          </div>
            )
          })}
          
          
        </div>
    </>
                
  )
}
