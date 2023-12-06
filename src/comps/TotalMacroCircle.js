import React, { useState, useRef } from "react";
import { motion, animate } from "framer-motion"



//if you wanna change something you do so with style as an object
const TotalMacroCircle =()=>{

  const circularProgressRef = useRef(null)

  let totalCalories = 1800
  let currentCalories = 1600

  const caloriesToCircularProgress = currentCalories /totalCalories

  const[percent,setPercent] = useState(90)
  const radius = 85
  const dashArr = radius * Math.PI *2
  const dashOffset = dashArr -(dashArr*percent) /100

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


const draw ={
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
};


  return (
    <div  >

    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"

    >
    <text x="16.5%" y="18%" dy="0.2rem" style={{fontWeight:700, fontSize:30, color:"white"}} textAnchor="middle" className="circle-text">{currentCalories}kcal</text>


      <motion.circle

        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1}
        > 

      </motion.circle>

    </motion.svg>
    </div>




)
}
export default TotalMacroCircle