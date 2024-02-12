import React, {useState,useEffect,useRef, createContext}from "react";
import { motion, animate } from "framer-motion"
import { BsNodeMinusFill } from "react-icons/bs";
import {BreakfastLog} from "./BreakfastLog";
import {BreakfastLog2 }from "./BreakfastLog2";
import {BreakfastLog3} from "./BreakfastLog3";
import TotalMacroCircle2 from "./TotalMacroCircle2";
import { set } from "animejs";




export const EatingTimeContext = createContext()

export default function EatingTime({props, onTotalCal})



{
 
const breakfastProgressRef = useRef(null)
const lunchProgressRef = useRef(null)
const dinnerProgressRef = useRef(null)
const [selectedSlot,setSelectedSlot]= useState(0)

const[totalOne,setTotalOne] =useState(0) //the calorie amount
const[totalTwo,setTotalTwo] =useState(0) //the calorie amount
const[totalThree,setTotalThree] =useState(0) //the calorie amount
const[totalCalIntaked,setTotalCalIntaked] = useState(parseInt(totalOne)+parseInt(totalTwo)+parseInt(totalThree))
onTotalCal(totalCalIntaked)
const [breakfastProgress,setBreakfastProgress]= useState(0)
const [lunchProgress, setLunchProgress] = useState(0)
const [dinnerProgress, setDinnerProgress] = useState(0)



useEffect(() =>{
  setTotalCalIntaked(parseInt(totalOne)+parseInt(totalTwo)+parseInt(totalThree))
},[totalOne,totalTwo,totalThree])
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

let eatingObject = {
  selectedSlot: selectedSlot,
  totalCalIntaked: totalCalIntaked,
}




return (

  <EatingTimeContext.Provider value={{selectedSlot, eatingObject}}>


<div className="eating-time-container">
  <div onClick= {()=>setSelectedSlot(1)}className="breakfast-container">

    <div className="progress-container">
    <text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Breakfast<span className="total-calories-log">: {!totalOne?0:totalOne} cals</span></text>





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

    <div onClick= {()=>{setSelectedSlot(1)
  console.log(selectedSlot)}} className="breakfast-input">
      <BreakfastLog onTotalOne = {setTotalOne}/>
    </div>
  </div>
  <div onClick= {()=>setSelectedSlot(2)} className="breakfast-container">

<div className="progress-container">
<text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Lunch<span className="total-calories-log">: {!totalTwo?0:totalTwo} cals</span></text>


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

<div onClick= {()=>{setSelectedSlot(2)
  console.log(selectedSlot)}} className="breakfast-input">
<BreakfastLog2  onTotalOne = {setTotalTwo} />

</div>
</div>
<div onClick= {()=>setSelectedSlot(3)} className="breakfast-container">

<div className="progress-container">
<text style={{fontWeight:700, fontSize:20}}  className="breakfast-title">Dinner <span className="total-calories-log">: {!totalThree?0:totalThree} cals</span></text>


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

<div onClick= {()=>{setSelectedSlot(3)
  console.log(selectedSlot)}} className="breakfast-input">
<BreakfastLog3 onTotalOne = {setTotalThree} />

</div>
</div>


</div>

</EatingTimeContext.Provider>

)}