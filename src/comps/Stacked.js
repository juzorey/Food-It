import React,{useContext,useState,useEffect,useRef} from 'react'; 
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { SearchFoodContext } from './SearchFood';

//create a hook for the changing of charts
import {DailyOptions, DailySeries} from './chart.config.ts'
import { WeeklyOptions,WeeklySeries } from './chartWeekly.config.ts'
import BreakfastLog from './BreakfastLog2';
import { BreakFastContext } from './BreakfastLog'
import { useElementScroll } from 'framer-motion';
import searchFoodContextData from './SearchFoodDataContext.js';

export const Stacked=({option, arr})=>{

const foodContext = useContext(SearchFoodContext)
const breakContext = useContext(BreakFastContext)


const { weeklyData  } = useContext(searchFoodContextData);
const { chartData1 } = useContext(searchFoodContextData);



// Define your initial state values
const initialChartData = {
  series: [
    {
      name: 'Today',
      data: [124, 115, 30],
    },
  ],
}

const ref = useRef(10)

const initialChartState = {
  series: [
    {
      name: 'Today',
      data: [124, 87, 120],
    },
  ],
}



  // const { breakObject: { carbs } } = useContext(BreakFastContext) // this being undefined might be the issue
  const [chartData, setChartData] = useState(initialChartData)
  let [carbsState, setCarbsState] = useState(0)
  let [charState, setCharState] = useState(initialChartState)

function changeState(state){

  if(state !== undefined){
  let stateAny = state
  return stateAny
}
else{
  let stateAny2 = { series: [
    {
      name: 'Today',
      data: [5, 7, 4],
    },
  ],
}
  return stateAny2
}
}
let fakeRef = useRef({series: [
  {
    name: 'Today',
    data: [124, 87, 120],
  },
],})

let functionResult = changeState(charState)

  const[refresh,setRefresh] = useState(false)
  console.log(breakContext,'why')

  const submit = (fate)=>{

    let one = 13
    if(ref.current >11) {

       one=ref.current
console.log(one,'one ref')
console.log(ref.current,'from effect 1')
console.log(fate,'fate')




let newState = { series: [
  {
    name: 'Today',
    data: [5, 7, one],
  },
],
}

fakeRef.current ={ series: [
  {
    name: 'Today',
    data: [5, 7, 14],
  },
],
}
console.log(fakeRef,'fakeRef')

setCharState(newState)


    }else  {
      console.log(ref.current,'not working')
      console.log(breakContext,'breal')
    }
    console.log(ref.current,'from effect2 ')

    console.log(carbsState,'carbsate')

    console.log('submited')
    // setRefresh(!refresh)
    console.log(refresh)
    
  // setCharState(changeState(newState))

//   setCharState({ series: [
//     {
//       name: 'Today',
//       data: [5, 7, carbsState],
//     },
//   ],
// })


    console.log(ref.current)
    console.log(functionResult.series,'function result ')

  }
 useEffect(()=>{
changeState(charState)

console.log(changeState(charState),'bust ')

 },[charState])

  console.log(ref.current)

  useEffect(()=>{
    console.log(ref.current,'this fucker')
    setCarbsState(ref.current)
    submit(ref.current)
  },[ref.current])

  // useEffect(()=>{

  //   submit(carbsState)

  // },[carbsState])

  // Update carbsState when carbs changes
  useEffect(() => {
    if(breakContext != undefined){

      ref.current = breakContext.breakObject.carbs
      carbsState = ref.current
      console.log(ref.current,'ref')
      console.log(carbsState,'carg')

      // setCarbsState(ref.current)
  }
  }, [breakContext, 'breakObject'])

//   // Update charState when carbsState changes
//   useEffect(() => {
//     setCharState({
//       series: [
//         {
//           name: 'Today',
//           data: [20, 99, ref.current],
//         },
//       ],
//     })

//     console.log(ref)


//   }, [carbsState])

//   // Update chartData when charState changes
//   useEffect(() => {
//     if(breakContext!=undefined) {
//       carbsState =breakContext.breakObject.carbs
// console.log(carbsState)
// console.log(breakContext.breakObject.carbs)

//     }
// changeState(charState)
//     // setSecond({
//     //   series: [
//     //     {
//     //       name: 'Today',
//     //       data: [ref.current, ref.current, ref.current], //the carbstate only stays at the original state- 
//     //     },
//     //   ],
//     // })
//     // setChartData({
//     //   series: [
//     //     {
//     //       name: 'Today',
//     //       data: charState.series[0].data,
//     //     },
//     //   ],
//     // })
//     console.log(charState,'chartState')


//   }, [charState])
// console.log(ref,'alone carb')


//   useEffect(()=>{


//     console.log(secondChartState)
  
  
//   },[secondChartState])
// useEffect(()=>{
//   setChartData(secondChartState)
//   console.log(chartData,'chartData') // this already runs 3 times
//   console.log(ref)//this submit makes it revert to the original state


// },[refresh])
















// // const breakfastContext =  useContext(BreakfastLogContext)


//   //eaither put it in two differnt chart states or just the variable


//   let[chartData,setChartData]= useState(
//     {
//     series:[  {
//       name: 'Today',
//       data: [124, 115,30],
//     },]
    
//   }
//   )
//   // when breakcontext updates and its not undefined put it into State
//   let [macrosObject,setMacrosObject] = useState(10)
//   let[charState,setCharState] = useState({
//     series:[  {
//       name: 'Today',
//       data: [124, 87,120],
//       },]
//     })
//   let macro = macrosObject
//   console.log(macro,'macro')
  

//   useEffect(()=>{
//     if(breakContext != undefined){
//       setMacrosObject(breakContext.breakObject.carbs)
//       charState={
//         series:[  {
//           name: 'Today',
//           data: [20, 99,breakContext.breakObject.carbs],
//           },]
//         }

//     }
//   },[breakContext])
//   useEffect(()=>{
//     console.log(macrosObject,'carbs macro')//alreayd re=-renders twice before anything happens
//     console.log(macro,'macro')

//     // ----------------------------npmthis does change the state  but doing a submit reverts it back to original state
//     // it does change to the original states 
      
//       const StateChange= async ()=>{
//           const resData = await charState
//           if(!!resData){
//             setChartData(resData)
//             console.log(chartData,'promise chartData')
//             console.log(charState,'promise charState')
//             console.log(resData,'promise resData')


//           }

//       }
//       StateChange()

//         // setCharState({ series:[  {
//         //   name: 'Today',
//         //   data: [124, 87,macro],
//         //   },]
//         // })
//       console.log(chartData,'chartData submit')
//     // console.log(macro,'macro')x

//     // return()=>{
//     //   setCharState(chartData)
//     //   console.log(charState, 'return charState')
//     //   console.log(chartData,'chartData return ')

//     // }
//   },[macrosObject])
//   useEffect(()=>{


//     setChartData({
//     series:[  {
//       name: 'Today',
//       data: [20, 99,30],
//       },]
//     }
// )
// console.log(chartData)  

// },[submit])

// function handleChange(){
//   setChartData(prevState=>{
//     return {...prevState, series: charState.series  }
//   })
// }
// // when click submit put the state into the series object
//   // useEffect(()=>{



//   //   if(submit == true){
//   //     setChartData(charState)
//   //     console.log(chartData,'chartData submit')
//   //   console.log(macro,'macro')

//   //   }
//   // },[submit ])
//   // useEffect(()=>{
//   //   console.log(chartData,'chartData')
//   //   console.log(macrosObject,'macrosObject') //  this doesnt update at all 
//   //   console.log(macro,'macro')

//   //   setChartData(charState,'chartstate')
//   //   console.log(chartData,'chartData')
    

//   // },[chartData])
  


// console.log(breakContext,"break context")
// let[breakData, setBreakData]= useState([124, 115,30])
// const[breakDataV, setBreakDataV]= useState(0)

// // let resultOne = arr.filter((zero) => zero!==0)
// let faker = breakDataV

// // useEffect(()=>{
// //   if(breakContext !== undefined){
// //     console.log(breakContext.breakObject.carbs,'break carbs')
// //     // console.log(breakData.toSpliced(2,1,breakContext.breakObject.carbs),'fujcks')

// //     // setBreakData( [...breakData.filter((zero) => zero!==0)] );
// //     setBreakData(breakData.toSpliced(2,1,breakContext.breakObject.carbs))
// //     let books = breakContext.breakObject.carbs
// //     setBreakDataV(books=>(books))
// //     // 
// //     // setBreakData(...[breakData],breakContext.breakObject.carbs)
// //     console.log(breakData,'break data no')






// //     console.log('effected')
// //   // if(submit == true){
// //   console.log('effected true')

// //     if(breakDataV!==0){
// //   console.log('effected break')
// //   console.log(breakDataV)

// // if(chartData!==0){
// //   console.log(chartData.series[0])

// // }

// // // if(chartData !== undefined){
// //   // console.log(chartData,'und chartData')
// //   // console.log(chartData.series,'und chartData.series')
// //   // console.log(chartData,'und chartata','und breakdata')
// //   // console.log(breakData,'und breakdata')
// //   // console.log(breakDataV,'und breakdataV')



// //   setChartData(books=>({
// //     series:[  {
// //       name: 'Today',
// //       data: [124, 87,books],
// //     },]
    
// //   }))
// // // }
// // // }

// // console.log(chartData.series[0])



// //   }

  
// //   }

  
  
// // },[breakContext])


// // useEffect(()=>{

// //   // matybe have serpeate that updates and this will be the one to update on click
// //   if(submit!=false){
// //   setChartData(
// //     {
// //       series:[  {
// //         name: 'Today',
// //         data: [124, 115, 100],
// //       },]
      
// //     }
// //   )
// // console.log('update hoe')
// // console.log(faker,'fake')
// // console.log(breakDataV)



// // }
// // },[submit])


// // useEffect(()=>{

// //   console.log('effected')
// //   // if(submit == true){
// //   console.log(chartData,'on submit')//this isnt updating but the effect on async is

// //   console.log('effected true')


// //   console.log('effected break')


// //     setChartData({
// //       series:[  {
// //         name: 'Today',
// //         data: [124, 115,100],
// //       },]
      
// //     })
// //   // }


// // },[chartData])


// // useEffect(()=>{
// // // state changes are async so it wont show immmediately
  
// //   const again = async ()=>{
// //     let myPromise = new Promise(function(resolve){
// //         let data = chartData;
// //         if(chartData!==undefined){
// //           setChartData(data.series[0])
// //           console.log(chartData,'promised data')

// //         }

// //     });
// //     console.log('promised')
// //      await myPromise
// //   }
  
// //   if(chartData!==undefined){
// //   // again()
// //   console.log(chartData,'asyync')//this triggers when chartData changes and turns undefniend 

    
// //   }


// },[chartData])



//in th effect have a dep change aand have it the second dep in array 
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

 
// const [fakeDisplay,setFakeDisplay]=
  
//   useState(


//      <Chart
//       options={DailyOptions}
//       type='bar'
//       series={[  {
//         name: 'Today',
//         data: initialChartData,
//       },]}
//       width={1100}
//       height={"100%"}/>
    


//         )
// useEffect(() =>{
//   Display()
//   console.log('fucky ou')
// },[breakContext])




// useEffect(()=>{Display()
// console.log(submit)

// },[submit])
//     function Display(option){
// // console.log(submit,'submit')
// //could be the function doesnt fun again

//       if(option=='daily'){
//        return(<Chart
//            options={DailyOptions}
//            series={fakeRef.current.series}              
//            type='bar'
//            height={"100%"}
//            width={1100 }/>)
   
//        }
        

//        else if(option =='weekly'){
//          return(<Chart
//            options={WeeklyOptions}
//            series={WeeklySeries}
//            type='bar'
//            height={"100%"}
//            width={1100 }/>)
//    }    
//     }

    // function Display(){
    //   return fakeDisplay
    // }


return(
  <div>
 <Chart
           options={option =='daily' ? DailyOptions:WeeklyOptions}
           series={option =='daily' ?chartData1.series:weeklyData.series }              
           type='bar'
           height={"100%"}
           width={1100 }/>


       
{/* <button type="button" onClick={submit}>submit</button> */}
</div>




)
}

