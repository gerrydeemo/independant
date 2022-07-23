import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Employment() {
    const [user, setUser] = useState([])
    const [emStatus, setEmStatus] = useState(false)
    const [myJob, setMyJob] = useState("Programmer")
    const [role, setRole] = useState(false)
    const [company, setCompany] = useState(false)
    const [location, setLocation] = useState(false)
    const [work, setWork] = useState(false)
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
                    <div className={work ? "line bg-white h-14 w-0.5 " : "line bg-white h-12 w-0.5 mt-2 "}></div>
                    <div onMouseEnter={() => setWork(true)} onMouseLeave={() => setWork(false)} className="w-1/2">
                <h1 className={ work ? "hidden" : "text-white text-center py-4 font-bold"} >Programmer</h1> 
                <button className={ work ? "text-black bg-white text-center py-4 w-full font-bold" : "hidden"} >Change Position</button>
            </div>
            </div>
            <div className="bg-black w-1/3 flex">
                <div className="w-1/2"><h1 className="text-white text-center py-4 font-bold">Company</h1></div>
                    <div className="line bg-white h-14 w-0.5  "></div>
                <div onMouseEnter={() => setCompany(true)} onMouseLeave={() => setCompany(false)} className="w-1/2">
                    <h1 className={ company ? "hidden" : "text-white text-center py-4 font-bold"} >Microsoft</h1> 
                    <button className={ company ? "text-black bg-white text-center py-4 w-1/2 border-r-2 border-black font-bold" : "hidden"} >Quit</button>
                    
                    <button className={ company ? "text-black bg-white text-center py-4 w-1/2  font-bold" : "hidden"} >Retire</button>
                </div>
            </div>
        <div className="bg-black w-1/3 flex">
            <div className="w-1/2">
                <h1 className="text-white text-center py-4 font-bold">Role</h1>
            </div>
                <div className="line bg-white h-14 w-0.5 "></div>
            <div onMouseEnter={() => setRole(true)} onMouseLeave={() => setRole(false)} className="w-1/2">
                <h1 className={ role ? "hidden" : "text-white text-center py-4 font-bold"} >Manager</h1> 
                <button className={ role ? "text-black bg-white text-center py-4 w-full font-bold" : "hidden"} >Request A Promotion</button>
            </div>
        </div>
        <div className="bg-black w-1/3 flex rounded-b-xl">
            <div className="w-1/2">
                <h1 className="text-white text-center py-4 font-bold">Location</h1>
            </div>
                <div className={location ? "line bg-white h-14 w-0.5" : "line bg-white h-12 w-0.5"}></div>
            <div onMouseEnter={() => setLocation(true)} onMouseLeave={() => setLocation(false)} className="w-1/2">
                <h1 className={ location ? "hidden" : "text-white text-center py-4 font-bold"} >San Francisco</h1> 
                <button className={ location ? "text-black bg-white text-center py-4 w-full font-bold" : "hidden"} >Move Location</button>
            </div>
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