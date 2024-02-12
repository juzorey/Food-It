import {BsArrowCounterclockwise, BsEmojiSmileUpsideDown, BsFillPlusCircleFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import React, {useState,useContext,useEffect, useRef, createContext} from 'react'
import {SearchFood} from './SearchFood.js'
import {useToggle} from './useToggle.js'
import { queryByTestId } from '@testing-library/react'
import { set } from 'animejs'
import { EatingTimeContext } from './EatingTimes.js'
import {Stacked }from './Stacked.js'

// make it into classes then polymorph
//or make the values different for each component


export const BreakFastContext = createContext()



export const  BreakfastLog2=({props,onTotalOne, selected}) =>{

  const searchFoodData = useContext(SearchFood)
  const eatingTimeData = useContext(EatingTimeContext)

//do the array
//searchedfoodComp ->amount->queryOne->arr->caloireArr->addArr function->onTotal prop
const[selectedSlot,setSelectedSlot] = useState()


  const [log, setLog] = useState([]);
  const[count,setCount]=useState(1)
  const[foodInput,setFoodInput]=useState('')
  const[calories,setCalories]=useState(0) 
const[amount,setAmount]=useState() // here

const selectedComp =(value)=>{

let resultOne = arr.filter((zero) => zero!==0)
 
console.log(resultOne,'result one')
console.log(arr,'arr one')


  console.log('inputed into query')
  if(value !=0){    
  console.log('inputed ')
  
    // setQueryThree(value)
  
  }


  
    setCalorieValueArr([...resultOne])
    console.log(calorieValueArr,'calorieValueArr')
    onTotalOne(addArr(arr,0))


    
  
  }
  
  const[queryOne,setQueryOne] =useState(0) 
  const[queryCarbThree,setQueryCarbThree]= useState(0)


  const [calorieValueArr, setCalorieValueArr]= useState([])
  const[carbValueArrThree, setCarbValueArrThree]= useState([])

  let arr= [...calorieValueArr,queryOne]// this is will the latest query number into it 

  let arrCarbThree = [...carbValueArrThree]
  if(carbValueArrThree[0]==0){

    console.log(arrCarbThree.shift(),'shifted')
   }

const[totalCarbs,setTotalCarbs]= useState(0)
   let breakObject = {
    news:'succes',
    carbs:totalCarbs
   }
useEffect(()=>{


  selectedComp(0)

},[queryOne])
useEffect(()=>{


  setCarbValueArrThree([...carbValueArrThree,queryCarbThree])
  

},[queryCarbThree])
useEffect(()=>{

setTotalCarbs(addArr(arrCarbThree,0))
 console.log(carbValueArrThree,'carb effect')
},[carbValueArrThree])


useEffect(()=>{

  //if the same add it anyways 
  if(amount  != undefined|| NaN || amount == queryThree)  {
    if(amount.calories != 0 ){
      console.log(arr, 'arr  first ')
      setQueryOne(amount.calories)
      console.log(amount,'amount')

   
      setQueryCarbThree(amount.carbs)
      
    
      console.log(amount.carbs,'amount.carbs')

    }
    else{
      setQueryOne(0)

    }

  }else{
    console.log('the oher women')
    setQueryOne(0)//changin thisn helps with maintaing it
    console.log(amount,'amount else')


  }

  // console.log(arr, 'arr')
  console.log(arr, 'arr  second')
  console.log(arrCarbThree, ' arr carb three ')


},[amount])


  const[queryTwo,setQueryTwo] =useState(0) 
  const[queryThree,setQueryThree] =useState(0) 


  // const[total,setTotal] = useState(0)
  const totalRef = useRef(10)


const[newDivLogOne,setNewDivLogOne] = useState([])
const[newDivLogTwo,setNewDivLogTwo] = useState([])
const[newDivLogThree,setNewDivLogThree] = useState([])


  const [calorieValueArrTwo, setCalorieValueArrTwo]= useState([])
  const [calorieValueArrThree, setCalorieValueArrThree]= useState([])

  //becuase it resest or th render is delayed to keep the speed have to keep the previous dealyed version in state which is naturall delayed becuase its state iwthin state ad have the new value updated into a regualr arr with the spreaded state arrau


  // let arr = [amount,...calorieValueArrTwo]// this is will the latest query number into it 
  // const [calorieValueArrOne, setCalorieValueArrOne]= useState([arr])
  
  let arrTwo = [...calorieValueArrTwo,queryTwo]// this is will the latest query number into it 
  let arrThree= [...calorieValueArrThree,queryTwo]// this is will the latest query number into it 

 
  let resultTwo = arrTwo.filter((zero) => zero!==0)
  let resultThree = arrThree.filter((zero) => zero!==0)



  // const[newArr,setNewArr] = useState([resultOne])
  const[result,setResult] = useState(0)

  // useEffect(()=>{
  //   onTotalOne(  addArr(fakeArr,0)    )
  
  // },[fakeArr])

  function addArr(array,type) {
    // console.log(fakeArr)
    // console.log(arr)
      
    // if(newDivLogOne.length==0){
    //   setCalorieValueArrOne([])
    // }

      let arrTotalOne = array.reduce((accumulator,currentValue)=>{
        console.log(accumulator+"accumulator")
        console.log(currentValue+"currentValue")

        return accumulator+currentValue},0)
      // console.log(resultOne+"result One")
      console.log(arrTotalOne+"arrTotal One")//thisi doubling arrTotla means its running it twice


      if (type==1){


        return arrTotalOne  - queryOne
      }   
      else if (type ==2){
        return arrTotalOne - queryCarbThree
      }
      else{
        // setResult(arrTotalOne)
        return arrTotalOne

      }
  }

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

  let clickCount = 0

const [fake,setFake]= useState(0)
//it does it on first renderthen on second state it second render
//   useEffect(()=>{

//       // setCalorieValueArrTwo([...arr])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
    

//     // console.log(resultOne) // these get activated when it works and when its different number  and so those th addArrFunction
//     // console.log(calorieValueArrOne) // this is pushing a 0 in the array but in line 316 it addes it but doesnt run the effect
//     // console.log(arr)
//     console.log('queryOne:' , queryOne)



  
//   },[amount])// couldf it be it only yactiavtes when queryOne changes 

//   useEffect(()=>{

//     setCalorieValueArrTwo([...calorieValueArrTwo,queryTwo])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
//   // onTotalTwo(addArrTwo(arrTwo,0))



// },[queryTwo])

// useEffect(()=>{

//   setCalorieValueArrThree([...calorieValueArrThree,queryThree])
// //ptoblem is its updating addArr function but not the state ontotal and only when newlog added
// // onTotalThree(addArrThree(arrThree,0))



// },[queryThree])
//   // setQuery(query)






  
// // calTrack += calories










  
const createNewlog=()=>{
console.log(eatingTimeData)

// if(eatingTimeData.selectedSlot == 1){
  newDivLogOne.push(breakfastLogTemplate(count))
    console.log(newDivLogOne)


// }
// if(eatingTimeData.selectedSlot == 2){
//   newDivLogTwo.push(breakfastLogTemplate(count))
//     console.log(newDivLogTwo)


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
    console.log(arr,'arr solo')// its being fully erased the fuck
    console.log(calorieValueArr,'calorie arr solo') // it is being fully removed 
    console.log(arrCarbThree, ' arr carb solo ')
    console.log(carbValueArrThree, ' value carb solo ')


    const removeCards = (index, containerNum) => {




      clickCount ++
      console.log(index,'index')
      console.log(index+'key') //  key
     


      // if( containerNum == 1){
        const divIndexOne = newDivLogOne.findIndex((key)=>key.key ==index) // finds index
        let newIndex = index -1
        newDivLogOne.splice(divIndexOne,1)
       
        let newArr = arr.toSpliced(newIndex,1)
        console.log(newArr)

        setCalorieValueArr(newArr)

        addArr(arrCarbThree,2)

        onTotalOne(addArr(arr,1))
        console.log("container removed")
        console.log(newIndex,'newIndex')
        console.log(newDivLogOne, 'newdivlog one')
        console.log(arr,'arr removed')
        console.log(calorieValueArr,'cal arr removed')

        // console.log(resultOne,'result one removed')

  

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

      setCount(count)




    };
    

// const calories = ()=>{
//   console.log( breakfastInputLog[0].date == 0 ? true:false)


// }


  


const breakfastLogTemplate =(index)=>{
  let newLog=(
    <div key ={index}>
      <div className='breakfast-log-inner-container'>
      <div style={{paddingLeft:20}} ><SearchFood onQueryOne = {setAmount}/></div>
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
let news = 'exported successfully'

 


  return(
    <BreakFastContext.Provider value = {{breakObject}}>

    <div className='fake-container'>
{<Stacked/>}
      
     {showNewLog()}


      <div className='add-btn-container'>

        <i className="add-log-btn" onClick={addLog}> {log.length>0? log[0].value: 0}add</i>
      </div>
    </div>
    </BreakFastContext.Provider>

  )
}