import React,{useContext,useState,useEffect,useRef} from 'react'; 
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { SearchFoodContext } from './SearchFood';

//create a hook for the changing of charts
import {DailyOptions, DailySeries} from './chart.config.ts'
import { WeeklyOptions,WeeklySeries } from './chartWeekly.config.ts'
import BreakfastLog from './BreakfastLog2';
import { BreakFastContext } from './BreakfastLog'

export const Stacked=({option})=>{

const foodContext = useContext(SearchFoodContext)
const breakContext = useContext(BreakFastContext)
// const breakfastContext =  useContext(BreakfastLogContext)
let ref = useRef(0)

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
console.log(breakContext,"break context")
let[breakData, setBreakData]= useState([124, 115,30])
// let resultOne = arr.filter((zero) => zero!==0)

useEffect(()=>{
  if(breakContext !== undefined){
    console.log(breakContext.breakObject.carbs,'break carbs')
    // console.log(breakData.toSpliced(2,1,breakContext.breakObject.carbs),'fujcks')

    // setBreakData( [...breakData.filter((zero) => zero!==0)] );
    setBreakData(breakData.toSpliced(2,1,breakContext.breakObject.carbs))
    // 
    // setBreakData(...[breakData],breakContext.breakObject.carbs)
    console.log(breakData,'break data')

  }
  
},[breakContext])


  // console.log(option)
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

 
const [fakeDisplay,setFakeDisplay]=
  
  useState(


     <Chart
      options={DailyOptions}
      type='bar'
      series={[  {
        name: 'Today',
        data: breakData,
      },]}
      width={1100}
      height={"100%"}/>
    


        )
useEffect(() =>{
  Display()
  console.log('fucky ou')
},[breakContext])
    function Display(){

      if(option=='daily'){
        return(fakeDisplay
       )}
        

       else if(option =='weekly'){
         return(<Chart
           options={WeeklyOptions}
           series={WeeklySeries}
           type='bar'
           height={"100%"}
           width={1100 }/>)
   }    
    }

    // function Display(){
    //   return fakeDisplay
    // }

  
return(
  <div>
 {Display()}

</div>




)
}

