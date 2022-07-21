import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Employment() {
    const [user, setUser] = useState([])
    const [emStatus, setEmStatus] = useState(false)
    const [myJob, setMyJob] = useState("Programmer")
    const [role, setRole] = useState(false)
    useEffect(() => {
        getEmploymentStats()
    },[]);
    const getEmploymentStats = () => {
        try {
            let storage = localStorage.getItem('userData')
            let userStorage = JSON.parse(storage)
            setUser(userStorage)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <Navbar/>
    <SideBar />

    <center className="mt-20">
        <div className="bg-black w-1/3 flex rounded-t-xl">
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Work</h1></div>
                <div className="line bg-white h-12 w-0.5 mt-2 "></div>
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Programmer</h1></div>
        </div>
        <div className="bg-black w-1/3 flex">
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Company</h1></div>
                <div className="line bg-white h-14 w-0.5  "></div>
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Microsoft</h1></div>
        </div>
        <div className="bg-black w-1/3 flex">
            <div onMouseEnter={() => setRole(true)} onMouseLeave={() => setRole(false)} className="w-1/2"><h1 className={ role ? "hidden" : "text-white text-center py-4 font-bold"} >Role</h1> <h1 className={ role ? "text-white text-center py-4 font-bold" : "hidden"} >Promote</h1></div>
                <div className="line bg-white h-14 w-0.5 "></div>
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Manager</h1></div>
        </div>
        <div className="bg-black w-1/3 flex rounded-b-xl">
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Location</h1></div>
                <div className="line bg-white h-12 w-0.5 "></div>
            <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">San Francisco</h1></div>
        </div>
    </center>
    <div>Promotion Opportunities</div>
    <div>Apply To Change Location</div>
    <div>Quit</div>
    <div>Retire</div>

    </>
  )
}

export default Employment