import { clear } from "@testing-library/user-event/dist/clear"
import { motion, animate } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const MacrosBar =({value})=>{
//keep a seperate file with objects of each nutrion that it takes from
// const [style,setStyle]=useState() styel will equal stylei nthe div
// useEffect(()=>{
//   setTimeout(()=>{
//     const newStyle={
//       opacity:1,
//       width:`${color}`

//     }
//     setStyle(newStyle)
//   }, 1000)
// })

//has to change animation erytie something gets added into the nutrion tracker
//0bjects can hace functions in them

const progressTextRef1 = useRef(null)//se a ref which diretyl affects the dom when somethign chances oftne instead of rerendering with usestatae
const progressTextRef2 = useRef(null)//se a ref which diretyl affects the dom when somethign chances oftne instead of rerendering with usestatae
const progressTextRef3 = useRef(null)//se a ref which diretyl affects the dom when somethign chances oftne instead of rerendering with usestatae

const[progress1,setProgress1]=useState(0)
const[progress2,setProgress2]=useState(0)
const[progress3,setProgress3]=useState(0)


useEffect(()=>{
  const id = setInterval(()=>{
    // setProgress(Math.random()*100)
    setProgress1(45)
    setProgress2(12)
    setProgress3(34)

  },1000)
  return ()=>{
    clearInterval(id)
  }

})

useEffect(()=>{
  const progressText1 = progressTextRef1.current?.textContent
  if(progressTextRef1.current !=null){
animate(parseInt(progressText1),progress1,{
  duration: 2,
  onUpdate:(cv)=>{
    progressTextRef1.current.textContent = cv.toFixed(0)//changing the dom directly and to string makes it into a string
  }
})}

const progressText2 = progressTextRef2.current?.textContent
  if(progressTextRef2.current !=null){
animate(parseInt(progressText2),progress2,{
  duration: 2,
  onUpdate:(cv)=>{
    progressTextRef2.current.textContent = cv.toFixed(0)//changing the dom directly and to string makes it into a string
  }
})}
const progressText3 = progressTextRef3.current?.textContent

if(progressTextRef3.current !=null){
animate(parseInt(progressText3),progress3,{
  duration: 2,
  onUpdate:(cv)=>{
    progressTextRef3.current.textContent = cv.toFixed(0)//changing the dom directly and to string makes it into a string
  }
})}

},[progress1])

return (


  <div className="progressbar-contatiner">
  <text style={{fontWeight:700, fontSize:20}}  className="circle-text">Protein</text>

<div className="progress 1">    



    <div className="progressbar">

      <motion.div className="bar"
      animate={{
        width: `${progress1}%`
      }}
      transition={{
        duration:2
      }}

      />
      </div>

      
      <div className="progressbar-number-container">
        <p ref={progressTextRef1}>0</p>
        <p>%</p>
      </div>

</div>
<text style={{fontWeight:700, fontSize:20}}  className="circle-text">Fat</text>

<div className="progress 2">

     <div className="progressbar">
      <motion.div className="bar"
      animate={{
        width: `${progress2}%`
      }}
      transition={{
        duration:2
      }}

      />
      </div>

      
      <div className="progressbar-number-container">
        <p ref={progressTextRef2}>0</p>
        <p>%</p>
      </div>
</div> 
<div className="progressbar3-container">
<text  style={{fontWeight:700, fontSize:20}}  className="circle-text">Carbs</text>

<div className="progress 3">

       <div className="progressbar">
      <motion.div className="bar"
      animate={{
        width: `${progress3}%`
      }}
      transition={{
        duration:2
      }}

      />
      </div>

      
      <div className="progressbar-number-container">
        <p ref={progressTextRef3}>0</p>
        <p>%</p>
      </div>  
</div> 
</div>

  </div>
  )
}


export default MacrosBar;