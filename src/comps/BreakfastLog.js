import {BsFillPlusCircleFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import React, {useState} from 'react'

export default function BreakfastLog() {

  const [log, setLog] = useState([]);
  const[count,setCount]=useState(1)


  const addLog=()=>{
      setCount(count+1) 
      setLog([...log,count])    

    }

 

  const showNewLog=()=>{
    return (
      log.map((log,index)=>{
        return(
          <div key = {index}>
          {breakfastLogTemplate(index)}
          </div>
          )
      })
   
    )
  }
    
    const removeCards = (index) => {
      const newLog = log.filter((_,i)=> i!==index)
      setLog(newLog,)
      setCount(count-1)
    };

const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
        <div className='breakfast-item-name'>Egg Scrambled </div>
      
        <div className='breakfast-item-container'>        
          <div className='breakfast-item-calories'> 91 cals</div>
          <div className='breakfast-item-amount'>1 Large Egg </div>
        </div> 
      <div className="garbage-bin-2" onClick={()=>removeCards(index)}> <ImBin color="white"/> </div>
      </div>
    </div>
)
return newLog
} 
 


  return(
    <div >
     {showNewLog()}
      <i className="add-log-btn" onClick={addLog}> <BsFillPlusCircleFill style={{marginTop:10,fontSize:30, color:"#20bf6b"}}/></i>

    </div>
  )
}