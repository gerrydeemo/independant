import React,{useState, useEffect} from 'react'
import Navbar from "../Components/Navbar"
import Logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import LogoBlack from "../assets/logoblack.png";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()
    const [errorShow, setErrorShow] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [typePass, setTypePass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    





    const Login = async () => {
        if (email === "") {
            setErrorShow(true);
            setErrorMessage("Work number is required");
        } else if (password === "") {
            setErrorShow(true);
            setErrorMessage("Password is required");
        }
        else {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            try {
                const data = await response.json();
                console.log(data)
            
                localStorage.setItem("userData", JSON.stringify(data));
                navigate("/jobs");
            } catch(e) {
                setErrorShow(true);
                setErrorMessage("Invalid work number or password or invalid admin status");
            }
           
            
        }
    }
  return (
    <>
        <Navbar />
        <div className="flex flex-col items-center h-screen ">
            <div className="container w-6/12 bg-black h-3/4 mt-20 rounded-2xl">
                <div>
                    <div className="flex flex-col items-center ">
                        <img src={Logo} alt=" " className="w-3/12 mt-20 "/>
                    </div>
                    <div>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-2/4 w-30 rounded-md h-10 mt-20 pl-2 text-white bg-black outline-none border-2 border-white font-semibold placeholder:text-zinc-400 " placeholder="Enter your email address"/>
                    </div>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} type={typePass ? "text" : "password"} className="w-5/12 rounded-l-md h-10 mt-2 pl-2 text-white bg-black outline-none border-2 border-white font-semibold placeholder:text-zinc-400 " placeholder="Enter your password"/>
                        <button onClick={() => setTypePass(!typePass)} className="w-20 rounded-r-md h-10 mt-2 -ml-2  bg-white border-2 text-black border-white font-bold hover:bg-gray-200"><FontAwesomeIcon icon={typePass ? faEyeSlash : faEye} /></button>

                    </div>
                    <div>
                        <button onClick={() => Login()} className="w-5/12 h-12 mt-5 py-2 bg-white border-2 text-black border-black font-bold hover:animate-pulse rounded-xl">Login</button>
                    </div>
                    <div onClick={() => navigate("/register")} className="text-white underline cursor-pointer">
                        Not a user yet. Register your account.
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

