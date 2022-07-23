import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';

function Pay() {
  const [salaryDisplay,setSalaryDisplay] = useState(false)
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div className="mx-auto w-4/5 float-right ">
    <div className="flex">
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Salary</h1>
        <input disabled={true} value="£100000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Salary Left</h1>
        <input disabled={true} value="£20000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Salary Deductions</h1>
        <input disabled={true} value="£20000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Net Pay</h1>
        <input disabled={true} value="£20000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Pension</h1>
        <input disabled={true} value="£20000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
      <div className="pt-2 cursor-pointer font-bold text-2xl shadow-inner shadow-slate-400 h-20 w-2/12" onClick={() => setSalaryDisplay(!salaryDisplay)}>
        <h1 className="cursor-pointer text-center w-full text-xl tracking-[.15em] ">Bonus/Commision</h1>
        <input disabled={true} value="£20000" className="cursor-pointer bg-white text-center w-11/12 text-lg outline-none tracking-[.45em]" type={salaryDisplay ? "text" : "password"}/>
      </div>
    </div>
      <div className="flex justify-center items-center w-full list-item mt-3 ">
          <div className=" bg-white border-2 shadow-md  h-64 w-4/12 mt-5 mx-auto rounded-2xl ">
            <h1 className="text-left pl-10 pt-5 font-bold text-2xl mb-3">Pay Statements</h1>
              <div className="overflow-y-auto w-full h-44">
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 1</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 2</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 3</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 4</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 5</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 6</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 7</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 8</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 9</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 10</button>
                <button className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40 w-full">Pay Statement Week 11</button>
              </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-3 ">
          <div className=" bg-white border-2 shadow-md  h-64 w-4/12 mt-5 mx-auto rounded-2xl ">
            <h1 className="text-left pl-10 pt-5 font-bold text-2xl mb-3">Benefits</h1>
          <div className="overflow-y-auto w-full h-44">
                <h1 className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40">Fringe Benefits</h1>
                <h1 className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40">Discount</h1>
                <h1 className="text-left pl-10 font-semibold text-sm py-2 border-t-2 border-slate-40">Bonus</h1>
          </div>
      </div>
    </div>
    </div>


    
    </>
  )
}

export default Pay