import React from 'react'
import "../Home/style.css";
import "../Home/style-color.css";


function Cont() {
  return (
    <div>
      <div className='jus-between m-60'>
        <div className='jus-start gap-10'>
          <p>Attendancce </p>
          <p>Month-August</p>
        </div>
        <div className='jus-end gap-10'>
          <p>Year</p>
          <select >
            <option value="Option 1">2021</option>
            <option value="Option 2">2022</option>
            <option value="Option 3">2023</option>
          </select>

          <p>Month</p>
          <select >
            <option value="Option 1">April</option>
            <option value="Option 2">May</option>
            <option value="Option 3">June</option>
          </select>
        </div>
      </div>


    </div>
  )
}

export default Cont