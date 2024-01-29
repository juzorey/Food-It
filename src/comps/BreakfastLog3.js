import {BsArrowCounterclockwise, BsEmojiSmileUpsideDown, BsFillPlusCircleFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import React, {useState,useContext,useEffect, useRef} from 'react'
import {SearchFood} from './SearchFood.js'
import {useToggle} from './useToggle.js'
import { queryByTestId } from '@testing-library/react'
import { set } from 'animejs'
import { EatingTimeContext } from './EatingTimes.js'


// make it into classes then polymorph
//or make the values different for each component



export default function BreakfastLog({props,onTotalOne, selected}) {

  const searchFoodData = useContext(SearchFood)
  const eatingTimeData = useContext(EatingTimeContext)

  let fun = eatingTimeData.eatingObject 
  console.log(fun)
  console.log(eatingTimeData)

  


//do the array

const[selectedSlot,setSelectedSlot] = useState()


  const [log, setLog] = useState([]);
  const[count,setCount]=useState(1)
  const[foodInput,setFoodInput]=useState('')
  const[calories,setCalories]=useState(0) 
const[amount,setAmount]=useState(0)
const[count2,setCount2]=useState(0)


const [calorieValueArrThree, setCalorieValueArrThree]= useState([])
const[carbValueArrThree, setCarbValueArrThree]= useState([])

const selectedComp =(value)=>{
  console.log('inputed into query')
  if(value !=0){    
    console.log('inputed ')

    // setQueryThree(value)

    }


  setCalorieValueArrThree([...calorieValueArrThree,queryThree])

  setCarbValueArrThree([...carbValueArrThree, queryCarbThree])
  // addArrThree(arrCarbThree,0)
  onTotalOne(addArrThree(arrThree,0))


}


const[queryCarbThree,setQueryCarbThree]= useState(amount)
const[queryThree,setQueryThree] =useState(amount ) //this isnt being updated
//have it turn zero in betweeen and erase the zeros and then add
//orforce a rerender

let arrThree= [...calorieValueArrThree,queryThree]// this is will the latest query number into it 
let arrCarbThree = [...carbValueArrThree, queryCarbThree]
//checking if it will updaet
useEffect(()=>{
  setCount2(count2+1)
  console.log(count2, "count")
  selectedComp(0)

},[queryThree])



//when delete the last query will be the one connected to the slot it clicked, object, and will be conditional on the slot
useEffect(()=>{
  
  //if the same add it anyways 
  if(amount.calories != undefined|| NaN || amount == queryThree)  {//potentially wont have to have amount.calories i can jsut assing that outside this file
    setQueryThree(amount.calories)
    setQueryCarbThree(amount.carbs)

    console.log(amount,'amount')
    console.log(amount.calories,'amount.calories')
    console.log(amount.carbs,'amount.carbs')


  }else{
    setQueryThree(0)

  }

  // console.log(arr, 'arr')
  console.log(arrThree, 'arr three ')
  console.log(arrCarbThree, ' arr carb three ')

},[amount.calories])



  // const[total,setTotal] = useState(0)
  const totalRef = useRef(10)


const[newDivLogOne,setNewDivLogOne] = useState([])


  

  const [calorieValueArrTwo, setCalorieValueArrTwo]= useState([])


  //becuase it resest or th render is delayed to keep the speed have to keep the previous dealyed version in state which is naturall delayed becuase its state iwthin state ad have the new value updated into a regualr arr with the spreaded state arrau





  // let resultOne = arr.filter((zero) => zero!==0)

  let resultThree = arrThree.filter((zero) => zero!==0)



  // const[newArr,setNewArr] = useState([resultOne])



  //result one is the one getting affected when deleteing in the other slots
  // function addArr(array,type) {
         
      

  //   if(newDivLogTwo.length==0){
  //     setCalorieValueArrOne([])
  //   }

  //     let arrTotalOne = array.reduce((accumulator,currentValue)=>{
  //       console.log(accumulator)
  //       console.log(currentValue +"queryOne")

  //       return accumulator+currentValue},0)
  //     console.log(resultOne)
  //     console.log(arrTotalOne)//thisi doubling arrTotla means its running it twice


  //     if (type==1){


  //       return arrTotalOne - queryOne
  //     }   
  //     else{
  //       return arrTotalOne

  //     }
  // }

  function addArrThree(array,type) {
         

    if(newDivLogOne.length==0){
      setCalorieValueArrThree([])
      setCarbValueArrThree([])

    }

      let arrTotalThree = array.reduce((accumulator,currentValue)=>{
        console.log(accumulator+"accumulator three")
        console.log(currentValue +"queryThree")

        return accumulator+currentValue},0)
        
      console.log(resultThree+"resultThree")
      console.log(arrTotalThree+"arrTotalThree")//thisi doubling arrTotla means its running it twice, this still takes in the lastquery input into the sum

        let added = amount+ 1
      if(added == queryThree){
        arrTotalThree = arrTotalThree - 1
      }
      if (type==1){


        return arrTotalThree - queryThree
      }
      else if (type ==2){
        return arrTotalThree - queryCarbThree
      }
      else{
        return arrTotalThree

      }
  }

  // function addArrThree(array,type) {
         
      

  //   if(newDivLogOne.length==0){
  //     setCalorieValueArrThree([])
  //   }

  //     let arrTotalThree = array.reduce((accumulator,currentValue)=>{
  //       console.log(accumulator)
  //       console.log(currentValue +"queryThree")

  //       return accumulator+currentValue},0)
  //     console.log(resultThree)
  //     console.log(arrTotalThree)//thisi doubling arrTotla means its running it twice


  //     if (type==1){


  //       return arrTotalThree - queryThree
  //     }   
  //     else{
  //       return arrTotalThree

  //     }
  // }

  let clickCount = 0

const [fake,setFake]= useState(0)
//it does it on first renderthen on second state it second render
  useEffect(()=>{

//ptoblem is its updating addArr function but not the state ontotal and only when newlog added
    console.log(arrThree, 'arr three ')
    console.log(arrCarbThree, 'arr carb three ')

    console.log(calorieValueArrThree, 'caloriearr three ')



  
  },[queryThree])//triggers with change in vairebl query three that depends on amount 




  
const createNewlog=()=>{
console.log(eatingTimeData.selectedSlot)

// if(eatingTimeData.selectedSlot == 1){
  newDivLogOne.push(breakfastLogTemplate(count))
    console.log(newDivLogOne)




// }
}

// const queryRef = useRef(queryOne)


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
      newDivLogOne.map((log,index)=>log)


   
    )





  }
const addLog=()=>{
  createNewlog()



    // setNewDivLog(0)
    setLog([...log,count])



      setCount(count+1) 
      // setLog([...log,count])    

      // console.log(resultOne)// this js not erasing afater the removing of all 
    console.log(count)





    }
    

//issues is its updating on the qeury and only chanign the first one


    //might have to conjoin the arrays of the position and the value , 
    const removeCards = (index, containerNum) => {




      clickCount ++
      console.log(index,'index')
      console.log(index+'key') //  key
     


      // if( containerNum == 1){
        const divIndexOne = newDivLogOne.findIndex((key)=>key.key ==index) // finds index
        let newIndex = index -1
        newDivLogOne.splice(divIndexOne,1)

        resultThree.splice(newIndex,1)
        onTotalOne(addArrThree(arrThree,1))
        addArrThree(arrCarbThree,2)
        console.log("first container removed")
  

      // }else if(containerNum == 2){
      //   const divIndexTwo = newDivLogTwo.findIndex((key)=>key.key ==index) // finds index
      //   let newIndex = index -1
      //   newDivLogTwo.splice(divIndexTwo,1)

      //   resultTwo.splice(newIndex,1)
      //   onTotalTwo(addArrTwo(arrTwo,1))
      //   console.log("second container removed")
      
      // }else if(containerNum == 3){
      //   const divIndexThree = newDivLogThree.findIndex((key)=>key.key ==index) // finds index
      //   let newIndex = index -1
      //   newDivLogThree.splice(divIndexThree,1)

      //   resultThree.splice(newIndex,1)
      //   onTotalThree(addArrThree(arrThree,1))
      //   console.log("third container removed")
     

      // }

      // if(eatingTimeData.selectedSlot == 1){
      //   resultOne.splice(index-1,1)

      // }else if(eatingTimeData.selectedSlot ==2){
      //   resultTwo.splice(index-1,1)

      
      // }else if(eatingTimeData.selectedSlot ==3){

      //   resultThree.splice(index-1,1)
      
      // }

      
// 
      // console.log(resultOne, "resultOne arr")

      // addArr(query,result)


      // console.log(arr+"arr")// this in removal other slots affects the first one. know which slot it clicks on and put that ass arg in the fucniton to perform over the right slot removal
      //solutions: when clciked record the container and pass it through the remove function to do only the container numver removal
      // have to make it conditional  when the useEffect takes place based on the container number

      // const newLog = log.filter((_,i)=> i!==index)
      // let newIndex = index - clickCount
      // log.splice(0,1)

      // console.log(newDivLog.splice(newIndex,1))
      // console.log(newIndex)
      // console.log(newDivLogOne+"newDivLog One") // this in removal other slots affects the first one





      // const newLog = log.reduce((p,c)=>(c[p]==index &&p.push(c),p),[]);//filtering array o(n)






      // const filteredArr = resultOne.filter((_,i)=> i!==index)
      // const callType = 1
      // // addArr(query,filteredArr,callType)
      // console.log(queryOne)

      setCount(count-1)



    };
    

// const calories = ()=>{
//   console.log( breakfastInputLog[0].date == 0 ? true:false)


// }


  


const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
      <div style={{paddingLeft:20}} ><SearchFood onQueryOne= {setAmount}/></div>
        <div className="garbage-bin-2" onClick={()=>removeCards(index, eatingTimeData.selectedSlot)}> <ImBin color="white"/></div>



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

        <i className="add-log-btn" onClick={addLog}> {log.length>0? log[0].value: 0}add</i>
      </div>
    </div>
  )
}