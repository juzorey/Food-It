import React, {useEffect, useState } from "react";

export const Time=()=>{
  const[date,setDate] = useState(new Date())

  useEffect(()=>{
    let timer = setInterval(() => setDate(new Date),1000)
    return function cleanup(){
      clearInterval(timer)
    }

  })
return(<div style={{color:'white', fontFamily:'Gill Sans',fontWeight:700, fontSize:70}}>
  {date.toLocaleTimeString()}
</div>

)
}
