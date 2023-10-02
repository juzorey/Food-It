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
    

const calories = ()=>{
  console.log( breakfastInputLog[0].date == 0 ? true:false)
}


    let breakfastInputLog = [
      {
      date:0,
      item:"juice",
      calories:3,
      quantitiy:2
    },
    {
      date:1,
      item:"juice",
      calories:3,
      quantitiy:2
    },
  ]

const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
        {/* <div className='breakfast-item-name'>Egg Scrambled </div> */}
        <form>
              <input className='breakfast-item-name name-input'  type="text"/>
        </form>
        <div className='breakfast-item-container'>   
           
          <div className='breakfast-item-calories'> {calories} cals</div>
       
          {/* <div className='breakfast-item-amount'>1 Large Egg </div> */}
          <form>
            <input style={{background:"transparent", outline:"none",width:25}}className="food-quantity" type="number" id="quantity" name="quantity" min="0" max="20"/>
          </form>
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