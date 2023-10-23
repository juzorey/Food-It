import {BsArrowCounterclockwise, BsFillPlusCircleFill} from 'react-icons/bs'
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
  const totalRef = useRef(null)


  
  const [calorieValueArr, setCalorieValueArr]= useState([])
  //becuase it resest or th render is delayed to keep the speed have to keep the previous dealyed version in state which is naturall delayed becuase its state iwthin state ad have the new value updated into a regualr arr with the spreaded state arrau


  const arr = [...calorieValueArr,query]
  const result = arr.filter((word) => word!==0);



  function addArr(query){


      const arrTotal = arr.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0)
      console.log(result)
   
    return arrTotal
  }

const [fake,setFake]= useState(0)
//it does it on first renderthen on second state it second render
  useEffect(()=>{
      setCalorieValueArr([...calorieValueArr,query])

    onTotal(    addArr(query)
    )


  
  },[query])
  // setQuery(query)






  
// calTrack += calories







  const foodInfo = async (e)=>{
    e.preventDefault()
    const url = `https://food-nutrition-information.p.rapidapi.com/foods/search?query=${e.target.food.value}&pageSize=1&pageNumber=1&brandOwner=Kar%20Nut%20Products%20Company`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '695f94a9e2mshcc83a34a2c24bf7p1d2529jsnfab0b5eddbbd',
        'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.foods[0].foodNutrients[3].value);
      setCalories(result.foods[0].foodNutrients[3].value)
    } catch (error) {
      console.error(error);
    }

  }

  const addLog=()=>{


      setCount(count+1) 
      setLog([...log,count])    
      
    console.log(count)
    console.log(log)



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
    //might have to conjoin the arrays of the position and the value , 
    const removeCards = (index) => {
      const newLog = log.filter((_,i)=> i!==index)


      setLog(newLog,)
      setCount(count-1)



    };
    

// const calories = ()=>{
//   console.log( breakfastInputLog[0].date == 0 ? true:false)


// }


  


const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
      <div style={{paddingLeft:20}} value><SearchFood onQuery = {setQuery}/></div>
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
        <i className="add-log-btn" ref = {totalRef}onClick={addLog}> add</i>
      </div>
    </div>
  )
}