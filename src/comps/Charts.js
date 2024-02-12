
import React, {useState,useEffect, useContext,useForceUpdate} from 'react'
import {Stacked }from "./Stacked.js"





export default function Charts(){

  

  const chartOptions= {
    1:'daily',
    2:"weekly",
    3:"monthly"
  }
const[toggle,setToggleValue] = useState('daily')

//you can have an array in the state then map it for select options with key and the arry[e.target.value ] value being the key index

const handleChange=(e)=>{

  console.log(toggle)


setToggleValue(chartOptions[e.target.value])


console.log(toggle)
console.log(<Stacked></Stacked>)


}
  return (
    <div className="chart-container">
      <div className="toggle-view-container">
        <select  onChange={e => handleChange(e)} name="view" id="view">
          <option  value={1}>daily</option>
          <option value={2}>weekly</option>

        </select>
      </div>
      <div className="chart-container-daily">
        {toggle == 'daily' ?(
        <Stacked option= 'daily'/>):(
          <Stacked option= 'weekly'/>
        )}
      </div>


    </div>
  )
}