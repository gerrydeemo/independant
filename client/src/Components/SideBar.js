import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHardHat,faBookOpen,faHandshake,faCog} from "@fortawesome/free-solid-svg-icons";
import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function SideBar() {
  const navigate = useNavigate()
  const userData = localStorage.getItem('userData')
    const name = JSON.parse(userData).name
    const email = JSON.parse(userData).email
    const LoName = name.charAt(0)
    const Sub = name.substr(name.indexOf(' ') + 1);
    var LoName2 = Sub.charAt(0)
    var LoName3 = LoName + LoName2
    return (
      <div className="float-left w-1/5 h-screen" style={{backgroundColor: "#0E0E0E"}}>
          <div className="justify-center inline">
            <div className="w-4/12 mx-auto justify-center  mt-5 font-semibold text-4xl p-10 text-white bg-transparent border-2 border-white border-dashed text-center" style={{borderRadius: "50%"}}>
              {LoName3}
            </div>
            <h1 className="text-white font-bold text-xl mt-3">{name}</h1>
            <h1 className="text-white text-xs">{email}</h1>
            <div className="mt-10"></div>
            <div className="w-full px-3">
              <h1 onClick={() => navigate("/profile/jobs")} className="hover:bg-white hover:text-black hover:border-black cursor-pointer text-white font-semibold text-lg border-b-2 border-white w-full py-3 rounded-b-lg">
              <FontAwesomeIcon icon={faHardHat} /> JOBS
              </h1>
              <h1 onClick={() => navigate("/profile/requests")} className="hover:bg-white hover:text-black hover:border-black cursor-pointer text-white font-semibold text-lg  border-b-2 border-white w-full py-3 rounded-b-lg">
              <FontAwesomeIcon icon={faBookOpen} /> REQUESTS
              </h1>
              <h1 onClick={() => navigate("/profile/offers")} className="hover:bg-white hover:text-black hover:border-black cursor-pointer text-white font-semibold text-lg border-b-2 border-white w-full py-3 rounded-b-lg">
              <FontAwesomeIcon icon={faHandshake} /> OFFERS
              </h1>
              <h1 onClick={() => navigate("/profile/settings")} className="hover:bg-white hover:text-black hover:border-black cursor-pointer text-white font-semibold text-lg border-b-2 border-white w-full py-3 rounded-b-lg">
              <FontAwesomeIcon icon={faCog} /> SETTINGS
              </h1>
            </div>
          </div>
      </div>
    )
}