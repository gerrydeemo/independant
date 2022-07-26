import React,{useState} from 'react'
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import Calendar from "../../Components/Calendar";
import {motion} from "framer-motion";
function Holidays() {
  const [yesButton, setYesButton] = useState(false)
  const [no, setNo] = useState()
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className="mx-auto w-4/5 float-right ">
      <div className="w-full text-center ">
        <div className="w-full">
          <Calendar/>
          <button onClick={() => setYesButton(true)} >
                    Yes
          </button>
          <motion.div animate={yesButton ? {x: [0,-11500], opacity: 0} : {opacity: 1}  } className=" w-6/12 h-2/4 absolute  top-40 mt-16 left-1/3 ml-8 bg-[#009e6c] rounded-lg z-10 ">
          <div className="text-white font-bold text-xl mt-16 ">{localStorage.getItem("selectedDate")}</div>
          <div className="text-white font-bold text-lg mt-5 ">Are you sure you want to create a holiday?</div>
              <div className="text-white font-bold text-lg mt-5 flex w-full">
                <div className="w-1/2">
                  <button onClick={() => setYesButton(true)} className="bg-white text-[#009e6c] shadow-md shadow-green-700 py-5 px-40 border-2 border-white rounded-lg hover:text-green-500 hover:shadow-green-500 active:hidden">
                    Yes
                  </button>
                  </div>
                  <div className="w-1/2">
                    <button onClick={() => setNo(true)} className="bg-white text-[#009e6c] shadow-md shadow-green-700 py-5 px-40 border-2 border-white rounded-lg hover:text-green-500 hover:shadow-green-500 active:hidden">
                      No
                    </button>
                  </div>
                </div>
              </motion.div>  
        </div>
      </div>
    </div>
    </>
  )
}

export default Holidays