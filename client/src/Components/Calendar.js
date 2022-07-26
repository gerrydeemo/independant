import React, { Fragment,useState } from 'react';

import useCalendar from "../Hooks/useCalendar";

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const dateClickHandler = date => { 
    // check if date is less than current date
    if (date <= todayFormatted) {
      console.log("invalid")
    }
    else {
      console.log(date)
      setSelectedDateValue(date)
      localStorage.setItem("selectedDate", date)
    }
  }

  return(
    <center>
    <Fragment>
      <p className="text-lg font-bold py-4">{`${monthNames[selectedDate.getMonth()]}  ${selectedDate.getFullYear()}`}</p>
      <table className="table w-2/3">
        <thead className="border-2 border-black bg-black text-white text-lg font-bold">
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody className="border-2 border-black">
          {
            Object.values(calendarRows).map(cols => {
              return <tr  key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today border-2 border-black w-20 h-28 text-center cursor-pointer hover:bg-white hover:text-black`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={`${col.classes} w-20 h-28 text-center cursor-pointer hover:bg-[#009e6c] hover:text-white other `} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>
      <div className="flex w-1/2">
      <button className="w-full py-5 mx-10 bg-black text-white text-lg font-bold rounded-lg active:bg-[#009e6c] shadow-md shadow-black hover:shadow-none" onClick={getPrevMonth}>Prev</button>
      <button className="w-full py-5 mx-10 bg-black text-white text-lg font-bold rounded-lg active:bg-[#009e6c] shadow-md shadow-black hover:shadow-none" onClick={getNextMonth}>Next</button>
      </div>
    </Fragment>
    </center>
  );
}

export default Calendar;