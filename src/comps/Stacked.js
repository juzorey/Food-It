import React,{useContext,useState,useEffect} from 'react'; 
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { SearchFoodContext } from './SearchFood';

//create a hook for the changing of charts
import {DailyOptions, DailySeries} from './chart.config.ts'
import { WeeklyOptions,WeeklySeries } from './chartWeekly.config.ts'

export default function  Stacked ({option}){

const foodContext = useContext(SearchFoodContext)
  console.log(foodContext)
  let mouse = {}
const[macrosObject,setMacrosObject] = useState()
useEffect(()=>{
  if(foodContext != undefined || null){
    mouse = foodContext
    console.log(mouse)

  }
  console.log(mouse)


},[foodContext])
console.log(mouse)


function addFoodDataArr(object){
let foodDataArr = []
 
 
  

}

  console.log(option)
  let options= {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  let series = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]


  function Display(){
    if(option=='daily'){
     return(<Chart
      options={DailyOptions}
      type='bar'
      series={DailySeries}
      width={1100}
      height={"100%"}/>
    )}
    else if(option =='weekly'){
     return <Chart
        options={WeeklyOptions}
        series={WeeklySeries}
        type='bar'
        height={"100%"}
        width={1100 }/>}
    }
return(
  <div>
  {Display()}
</div>




)
}

