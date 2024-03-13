
import React, { useState, useRef, useContext,useEffect } from "react";
import { motion, animate, useMotionValue, useAnimate, stagger } from "framer-motion"
import { HomeContext } from "./Home";
import { EatingTimeContext } from "./EatingTimes.js";




//if you wanna change something you do so with style as an object
const TotalMacroCircle =(props)=>{
const eating= useContext(EatingTimeContext)

const HomeData= useContext(HomeContext)




let calorieGoal= parseInt(HomeData.homeDataObject.calorieInput)



let [operate,setOperate] = useState(false)
// if(calorieGoal ==100 ) {
//   setOperate(true)

//   console.log(calorieGoal)
// }
const [scope, animate] = useAnimate()

console.log( HomeData )
// let fun = eatingTimeData.eatingObject 

let fakeNum = props.totalCal/calorieGoal


// const[draw,setDraw] = useState( fuckCirclde)





  const fetchData =  async (length) => {

    if(length == Infinity){return null}

    await animate(scope.current, {stroke: "#00FFFF"},{ ease: "easeInOut", type: "spring", duration: .5, bounce: 0 })
    await animate(scope.current, {pathLength:length} )

    console.log("efeed")

  }

  fetchData(fakeNum)
  console.log(fakeNum)
  console.log(props.totalCal, "totalCal")



  // call the function

    // make sure to catch any error


let caloriesToCircularProgress = 1


// let x = useMotionValue({
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: caloriesToCircularProgress,
//       // this is what has to be changed
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }
// }
// )


  const circularProgressRef = useRef(null)

 
// useeffect on change and have input for currentCalories(takes from the sum of the trhee slots)


//change the visible functino to an object if use naime doesnt work
// let draw = 
//   {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => {
//       const delay = 1 + i * 0.5;
//       return {
//         pathLength: caloriesToCircularProgress,
//         // this is what has to be changed
//         opacity: 1,
//         transition: {
//           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//           opacity: { delay, duration: 0.01 }
//         }
//       };
//     }
//   }

// useEffect(()=>{

// if(calorieGoal> currentCalories) {
// x.set({
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: currentCalories/calorieGoal,
//       // this is what has to be changed
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }
// })}
// console.log(calorieGoal)

// console.log(x)

// },[calorieGoal])

// let draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: caloriesToCircularProgress,
//       // this is what has to be changed
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }
// }
// useEffect(()=>{  
// if(calorieGoal>currentCalories){
//   setDraw({}
    
//   )
// }else{
//   draw = {
   
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: (i) => {
//       const delay = 1 + i * 0.5;
//       return {
//         pathLength: caloriesToCircularProgress,
//         // this is what has to be changed
//         opacity: 1,
//         transition: {
//           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//           opacity: { delay, duration: 0.01 }
//         }
//       };
//     }
//   }

// }
//   console.log(draw)
//   console.log(caloriesToCircularProgress)
//   console.log(calorieGoal)



// },[calorieGoal])









  return (
    <div>
      <div className="svg-container">

    <motion.svg
      width="520"
      height="500"
      
      viewBox="-10 -50 630 400"
      initial="hidden"
      animate="visible"


    >
    <text x="16.5%" y="18%" dy="0.2rem" style={{fontWeight:700, fontSize:30,}} textAnchor="middle" >{calorieGoal}</text>


    <motion.circle
  className="placer"
  ref={scope}

    cx="300"
    cy="100"
    r="180"
    stroke="#ff0055"
    variants=
  {
    {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: caloriesToCircularProgress,
            // this is what has to be changed
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      }
  }
    custom={1}

    > 

  </motion.circle>

    </motion.svg>
    </div>


    <input type="hidden" className="cal-input"></input>
  </div>




)
}
export default TotalMacroCircle






  // const[percent,setPercent] = useState(90)
  // const radius = 85
  // const dashArr = radius * Math.PI *2
  // const dashOffset = dashArr -(dashArr*percent) /100

  // const draw = {
  //   hidden: { pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     const delay = 1 + i * 0.5;
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: {
  //         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
  //         opacity: { delay, duration: 0.01 }
  //       }
  //     };
  //   }
  // };
// return(
//   <motion.div className="macro-circle-container">
//     <motion.svg   initial="hidden"
//       animate="visible" height={200} width={200} viewbox={`0 0 200 200`}>
//       {/* <circle cx={100} cy={100} strokeWidth="15px"  r={radius} className="circle-background"></circle> */}
//       {/* <circle cx={100} cy={100} strokeWidth="15px"  r={radius} className="circle-progress" style={{strokeDasharray : dashArr, strokeDashoffset : dashOffset}} transform={`rotate(-90 100 100)`}></circle> */}
//       {/* <motion.circle className="circle-progress"
//         style={{ scale: 2, originX: "100px", originY: "100px" }}

//       animate={{
//         strokeDasharray : dashArr, strokeDashoffset : dashOffset
//       }}
//       transition={{
//         duration:2
//       }}


//       /> */}
// <motion.circle
//         cx="100"
//         cy="100"
//         r="80"
//         stroke="#ff0055"
//         variants={draw}
//         custom={1}
//       />
