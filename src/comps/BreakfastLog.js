import {BsArrowCounterclockwise, BsEmojiSmileUpsideDown, BsFillPlusCircleFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import React, {useState,useContext,useEffect, useRef} from 'react'
import {SearchFood} from './SearchFood.js'
import {useToggle} from './useToggle.js'
import { queryByTestId } from '@testing-library/react'
import { set } from 'animejs'



export default function BreakfastLog({onTotal}) {

  const searchFoodData = useContext(SearchFood)

//do the array




  const [log, setLog] = useState([]);
  const[count,setCount]=useState(1)
  const[foodInput,setFoodInput]=useState('')
  const[calories,setCalories]=useState(0) 
  const[query,setQuery] =useState(0) 
  // const[total,setTotal] = useState(0)
  const totalRef = useRef(10)


const[newDivLog,setNewDivLog] = useState([])
  
  const [calorieValueArr, setCalorieValueArr]= useState([])
  //becuase it resest or th render is delayed to keep the speed have to keep the previous dealyed version in state which is naturall delayed becuase its state iwthin state ad have the new value updated into a regualr arr with the spreaded state arrau


  let arr = [...calorieValueArr,query]// this is will the latest query number into it 
  let result = arr.filter((zero) => zero!==0)


  const[newArr,setNewArr] = useState([result])



  function addArr(array,type) {
         
      

    if(newDivLog.length==0){
      setCalorieValueArr([])
    }

      let arrTotal = array.reduce((accumulator,currentValue)=>{
        console.log(accumulator)
        console.log(currentValue)

        return accumulator+currentValue},0)
      console.log(result)
      console.log(arrTotal)//thisi doubling arrTotla means its running it twice


      if (type==1){


        return arrTotal - query
      }   
      else{
        return arrTotal

      }
  }
  let clickCount = 0

const [fake,setFake]= useState(0)
//it does it on first renderthen on second state it second render
  useEffect(()=>{

      setCalorieValueArr([...calorieValueArr,query])
//ptoblem is its updating addArr function but not the state ontotal and only when newlog added
    onTotal(addArr(arr,0))


  
  },[query])
  // setQuery(query)






  
// calTrack += calories










  
const createNewlog=()=>{

  newDivLog.push(breakfastLogTemplate(count))
    console.log(newDivLog)


}
const queryRef = useRef(query)


const showNewLog=()=>{

// return(log.map((log,index)=>{
//       return(
//         <div key = {index}ref = {queryRef}>
//         {breakfastLogTemplate(index)}
//         </div>
//         )
//     })
//   )
    return (
      newDivLog.map((log,index)=>log)
   
    )
  }
const addLog=()=>{
  createNewlog()



    // setNewDivLog(0)
    setLog([...log,count])



      setCount(count+1) 
      // setLog([...log,count])    

      console.log(result)// this js not erasing afater the removing of all 
    console.log(count)





    }
    


    //might have to conjoin the arrays of the position and the value , 
    const removeCards = (index) => {
      clickCount ++
      console.log(index,'index')
      console.log(index+'key') // key
      const divIndex = newDivLog.findIndex((key)=>key.key ==index) // finds index
      
      newDivLog.splice(divIndex,1)


      result.splice(index-1,1)
      

      console.log(result)

      // addArr(query,result)
      onTotal(addArr(arr,1))


      console.log(arr)

      // const newLog = log.filter((_,i)=> i!==index)
      // let newIndex = index - clickCount
      // log.splice(0,1)

      // console.log(newDivLog.splice(newIndex,1))
      // console.log(newIndex)
      console.log(newDivLog)





      // const newLog = log.reduce((p,c)=>(c[p]==index &&p.push(c),p),[]);//filtering array o(n)






      const filteredArr = result.filter((_,i)=> i!==index)
      const callType = 1
      // addArr(query,filteredArr,callType)
      console.log(query)

      setCount(count-1)



    };
    

// const calories = ()=>{
//   console.log( breakfastInputLog[0].date == 0 ? true:false)


// }


  


const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
      <div style={{paddingLeft:20}} ><SearchFood onQuery = {setQuery}/></div>
        <div className="garbage-bin-2" onClick={()=>removeCards(index)}> <ImBin color="white"/></div>



        {/* <div className='breakfast-item-name'>Egg Scrambled </div> */}
        {/* <form onSubmit={foodInfo}> */}

              {/* <input name="food" className='breakfast-item-name name-input'  type="text"/> */}
        {/* </form> */}
        {/* <div className='breakfast-item-container'>    */}
           
          {/* <div className='breakfast-item-calories'> {calories} cals</div> */}
       
          {/* <div className='breakfast-item-amount'>1 Large Egg </div> */}
          {/* <form>
            <input style={{background:"transparent", outline:"none",width:25}}className="food-quantity" type="number" id="quantity" name="quantity" min="0" max="20"/>
          </form> */}
        {/* </div>  */}
      </div>
    </div>
)
return newLog
} 
 


  return(
    <div className='fake-container'>
     {showNewLog()}


      <div className='add-btn-container'>

        <i className="add-log-btn" ref = {totalRef}onClick={addLog}> {log.length>0? log[0].value: 0}add</i>
      </div>
    </div>
  )
}