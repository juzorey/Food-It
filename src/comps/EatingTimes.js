import React, {useState,useEffect,useRef}from "react";
import { motion, animate } from "framer-motion"
import { BsNodeMinusFill } from "react-icons/bs";
import BreakfastLog from "./BreakfastLog";

export default function EatingTime()



{
 
const breakfastProgressRef = useRef(null)
const lunchProgressRef = useRef(null)
const dinnerProgressRef = useRef(null)



const [breakfastProgress,setBreakfastProgress]= useState(0)
const [lunchProgress, setLunchProgress] = useState(0)
const [dinnerProgress, setDinnerProgress] = useState(0)




useEffect(()=>{ // updates the progress bar number and tells it to wait to update
  const id = setInterval(()=>{
    setBreakfastProgress(10)
    setLunchProgress(20)
    setDinnerProgress(40)
},1000)
return ()=>{clearInterval(id)}
})

useEffect(()=>{// this gets the current number animateed to the prgoressbar
  const progressBreakfastRefNum = breakfastProgressRef.current?.textContent//this is the variable for the current number

  if(breakfastProgressRef.current !=null){
    animate(parseInt(progressBreakfastRefNum),breakfastProgress,{
      duration:2,
      onUpdate:(cv)=>{
        breakfastProgressRef.current.textContent = cv.toFixed(0)
      }
    })}


    const progressLunchRefNum = lunchProgressRef.current?.textContent
    if(lunchProgressRef.current != null){
      animate(parseInt(progressLunchRefNum),lunchProgress,{
        duration:2,
        onUpdate:(cv)=>{
          lunchProgressRef.current.textContent = cv.toFixed(0)
        }
      })
    }
    const progressDinnerRefNum = dinnerProgressRef.current?.textContent
    if(dinnerProgressRef.current != null){
      animate(parseInt(progressDinnerRefNum),dinnerProgress,{
        duration:2,
        onUpdate:(cv)=>{
          dinnerProgressRef.current.textContent = cv.toFixed(0)
        }
      })
    }
},[breakfastProgress])




return (<div className="eating-time-container">
  <div className="breakfast-container">

    <div className="progress-container">
    <text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Breakfast<span className="total-calories-log">: 454</span></text>





      <div className="progress-bar-container">
        <motion.div className="breakfast-bar"
        animate={{
          width:`${breakfastProgress}%`
        }}
        transition={{
          duration:2
        }}>

        </motion.div>
      </div>


        <p className="progress-percentage" ref ={breakfastProgressRef}>0 </p><i className="percentage">%</i>

    </div>

    <div className="breakfast-input">
      <BreakfastLog/>

    </div>
  </div>
  <div className="breakfast-container">

<div className="progress-container">
<text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Lunch<span className="total-calories-log">: 454</span></text>


  <div className="progress-bar-container">
    <motion.div className="breakfast-bar"
    animate={{
      width:`${lunchProgress}%`
    }}
    transition={{
      duration:2
    }}>

    </motion.div>
  </div>


    <p className="progress-percentage" ref ={lunchProgressRef}>0 </p><i className="percentage">%</i>

</div>

<div className="breakfast-input">
<BreakfastLog/>

</div>
</div>
<div className="breakfast-container">

<div className="progress-container">
<text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Dinner <span className="total-calories-log">: 454</span></text>


  <div className="progress-bar-container">
    <motion.div className="breakfast-bar"
    animate={{
      width:`${dinnerProgress}%`
    }}
    transition={{
      duration:2
    }}>

    </motion.div>
  </div>


    <p className="progress-percentage" ref ={dinnerProgressRef}>0 </p><i className="percentage">%</i>

</div>

<div className="breakfast-input">
<BreakfastLog/>

</div>
</div>


</div>)
}