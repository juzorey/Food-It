

import { useState } from "react"
export const useToggle=(intialState)=>{

    const[toggleValue, setToggleValue]= useState(intialState)
    const toggler =()=>{setToggleValue(!toggleValue)}
    
    return[toggleValue, toggler]

}