import React,{useState, useEffect} from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faArrowRightFromBracket, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar({ fixed }) {
  const navigate = useNavigate()
  const [screenName, setScreenName] = useState("")
  useEffect(() => {
    const storage = localStorage.getItem("pageName")
    setScreenName(JSON.parse(storage))
    console.log(screenName)
  },[])
  

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 inline-flex py-2 whitespace-nowrap uppercase text-white"
              onClick={() => navigate("/")}
            >
            <img src={Logo} alt=" " className="w-7 mr-1"/>
            <h1 className="text-lg font-bold hover:animate-pulse">INDEPENDENT </h1>
            </div>

            
          </div>

          <div onClick={() => navigate("/settings")} className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end">
            <FontAwesomeIcon icon={faCircleUser} className="cursor-pointer text-white text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" />
          </div>
          
        </div>
      </nav>
    </>
  );
}