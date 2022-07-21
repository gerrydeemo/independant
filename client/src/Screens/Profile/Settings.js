import {useNavigate} from 'react-router-dom'
import React,{useState, useEffect, useRef} from 'react'
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsPDF } from "jspdf";


export default function Settings()  {
    const userData = localStorage.getItem('userData')
    const name = JSON.parse(userData).name
    const email = JSON.parse(userData).email
    const password = JSON.parse(userData).password
    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const [pathInD, setPathInD] = useState("../../assets/9bdd934fe5544669faaf290b8f405df4.png")
    const [newPassword, setNewPassword] = useState(password)
    const [ep, setEp] = useState(0)
    const [editName, setEditName] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPass, setEditPass] = useState(false)
    const [readed, setReaded] = useState("")
    const [base, setBase] = useState("")
    const [contentTyper, setContentTyper] = useState("")
  
    const editPassword = () => {
      setNewPassword("")
      setEditPass(true)
    }
    const editEmails = () => {
      setNewEmail("")
      setEditEmail(true)
    }
    const editNames = () => {
      setNewName("")
      setEditName(true)
    }

    useEffect(() => {
      getImage()
    }, [])
    const updateName = () => {
      var store = localStorage.getItem('userData')
      var realname = JSON.parse(store).name
      var name = newName
      try {
        fetch("http://localhost:5000/updateName", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            realname: realname
          }),
        })
      } catch (error) {
        console.log(error)
      }
      localStorage.setItem("userData", JSON.stringify({name: newName, email: newEmail, password: newPassword}))
      window.location.reload()
    }


    const updateEmail = () => {
      var email = newEmail
      var store = localStorage.getItem("userData")
      var realemail = JSON.parse(store).email

      try {
        fetch("http://localhost:5000/updateEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            realemail: realemail,
            email: email
          }),
        })
      } catch (error) {
        console.log(error)
      }
      localStorage.setItem("userData", JSON.stringify({name: newName, email: newEmail, password: newPassword}))
      window.location.reload()
    }


    const updatePassword = () => {
      var password = newPassword
      var store = localStorage.getItem('userData')
      var realpass = JSON.parse(store).password
      try {
        fetch("http://localhost:5000/updatePassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            realpass: realpass
          }),
        })
      } catch (error) {
        console.log(error)
      }
      localStorage.setItem("userData", JSON.stringify({name: newName, email: newEmail, password: newPassword}))
      window.location.reload()
    }
    
    const SendImage = async ({ target: { files } }) => {
      const storage = localStorage.getItem("userData")
      const email = JSON.parse(storage).email
      const image = files[0]
      const imageForm = new FormData()
      imageForm.append("image", image)

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: imageForm,
          headers: {
            email: email,
          },

        })
        console.log("sent")
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
      
      
      
    const getImage = async () => {
      const storage = localStorage.getItem("userData")
      const email = JSON.parse(storage).email
      console.log(email)
      try {
        const response = await fetch("http://localhost:5000/getImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        })
        const data = await response.json()
        console.log(data.image)
        const img = data.image
        setPathInD(img)
      } catch (error) {
        console.log(error)
      }
    }

          
        
    








    const UploadControl = ({ children, value, onChange, disabled, accept }) => {
      return (
        <label htmlFor="contained-button-file" className="m-0 w-100">
          <input
            value={value}
            accept={accept}
            disabled={disabled}
            style={{ display: 'none' }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={disabled ? () => {} : onChange}
          />
          {children}
        </label>
      );
    };
    const InputButtonField = () => {
      return (
        <button className="bg-black text-white">
          <UploadControl onChange={SendImage} accept="image/*">
              Add Your CV
          </UploadControl>

        </button>
      );
    };

    

    
   
    return (
        <>
            <Navbar/>
            <SideBar/>
            <div className="mt-20">
        <center>
        <table className="w-1/2 mt-5 border-t border-b border-neutral-600">

          <tr className="h-10  hover:bg-neutral-100 border-neutral-200 border-b space-y-10">
            <td className="font-bold">Name</td>
            <td className="pl-10 font-semibold text-neutral-600"><input className={"bg-transparent outline-none "} type="text" value={newName} placeholder="Enter your new name" onChange={e => setNewName(e.target.value)}/></td>
            <td className="text-blue-500 hover:underline cursor-pointer">
            {
              editName ? <h1 onClick={updateName}>Add</h1> : <h1 onClick={editNames}>Edit</h1>
            }
            </td>
          </tr>
          <tr className="h-10 hover:bg-neutral-100 border-neutral-200 border-t border-b space-y-10">
            <td className="font-bold">Email</td>
            <td className="pl-10 font-semibold text-neutral-600"><input className={"bg-transparent outline-none "} placeholder="Enter your new email" type="text" value={newEmail} onChange={e => setNewEmail(e.target.value)}/></td>
            <td className="text-blue-500 hover:underline cursor-pointer">
            {
              editEmail ? <h1 onClick={updateEmail}>Add</h1> : <h1 onClick={editEmails}>Edit</h1>
            }
            </td>
          </tr>
          <tr className="h-10 hover:bg-neutral-100 border-neutral-200 border-t space-y-10">
            <td className="font-bold">Password</td>
            <td className="pl-10 font-semibold text-neutral-600"><input className={"bg-transparent outline-none "} type="text" placeholder="Enter your new password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/></td>
            <td className="text-blue-500 hover:underline cursor-pointer">
            {
              editPass ? <h1 onClick={updatePassword}>Add</h1> : <h1 onClick={editPassword}>Edit</h1>
            }
            </td>
          </tr>
        </table>
        </center>
        <div>
          <h1 className="font-semibold text-ellipsis text-lg text-right mr-80 font-mono p-2 cursor-pointer" title="These are employment&#013; points they go up based&#013; on reviews, work experience&#013; and length of time in jobs.">EP {ep}</h1>
        </div>
        <img src={"/uploads/" + pathInD} className="w-80 mx-auto"/>
        </div>
        
        <InputButtonField/>
        
        </>
    )
}