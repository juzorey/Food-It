
import React, {useState,useEffect, useContext,useForceUpdate} from 'react'
import {Stacked }from "./Stacked.js"


import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { SearchFoodContext } from './SearchFood';

//create a hook for the changing of charts
import {DailyOptions, DailySeries} from './chart.config.ts'
import { WeeklyOptions,WeeklySeries } from './chartWeekly.config.ts'
import BreakfastLog from './BreakfastLog2';


import { BreakFastContext } from './BreakfastLog'



export default function Charts(){

  

  const chartOptions= {
    1:'daily',
    2:"weekly",
    3:"monthly"
  }




// const foodContext = useContext(SearchFoodContext)
// const breakContext = useContext(BreakFastContext)
// let mouse = {}

// useEffect(()=>{
//   if(foodContext != undefined || null){
//     mouse = foodContext
//     console.log(mouse)

//   }
//   console.log(mouse)


// },[foodContext])
// console.log(mouse)
// console.log(breakContext,"break context")
// let[breakData, setBreakData]= useState([124, 115,30])


// const[chartData,setChartData]= useState(
//   {
//   series:[  {
//     name: 'Today',
//     data: [124, 115,30],
//   },]
  
// }
// )



// useEffect(()=>{
//   if(breakContext !== undefined){
//     console.log(breakContext.breakObject.carbs,'break carbs')
//     // console.log(breakData.toSpliced(2,1,breakContext.breakObject.carbs),'fujcks')

//     // setBreakData( [...breakData.filter((zero) => zero!==0)] );
//     setBreakData(breakData.toSpliced(2,1,breakContext.breakObject.carbs))
//     // 
//     // setBreakData(...[breakData],breakContext.breakObject.carbs)
//     console.log(breakData,'break data dfined')

//   }


// },[breakContext])


// // const [fakeDisplay,setFakeDisplay]=

// // useState(


// //   <Chart
// //    />
 


// //      )
const[refresh,setRefresh] = useState(false)
const submit = ()=>{
  console.log('submited')
  setRefresh(!refresh)
  console.log(refresh)

  // setChartData(
  // {
  //   series:[  {
  //     name: 'Today',
  //     data: [124, 115,100],
  //   },]
  // } 
  // )
}
  //    function Display(option){

  //     if(option=='daily'){
  //       return(<Chart
  //         options={DailyOptions}
  //         type='bar'
  //         series={chartData.series}
  //         width={1100}
  //         height={"100%"}
          
  //         />
  //      )}
        

  //      else if(option =='weekly'){
  //        return(<Chart
  //          options={WeeklyOptions}
  //          series={WeeklySeries}
  //          type='bar'
  //          height={"100%"}
  //          width={1100 }/>)
  //  }    
  //   }
const[toggle,setToggleValue] = useState('daily')

//you can have an array in the state then map it for select options with key and the arry[e.target.value ] value being the key index

const handleChange=(e)=>{

  console.log(toggle)

// setBreakData(0)
// console.log(breakData)
setToggleValue(chartOptions[e.target.value])
// console.log(breakData,'naked')


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
     <Stacked  option={toggle}/>
      </div>

    </div>
  )
}