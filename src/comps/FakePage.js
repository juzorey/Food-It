import React,{useState, useEffect, useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import searchFoodContextData1 from "./SearchFoodDataContext";
import CreateFoods from "./CreateFoods";
export default function FakePage(){


const {showDayFoods} = useContext(searchFoodContextData1)
const { createFood } = useContext(searchFoodContextData1)
const {curDayID} = useContext(searchFoodContextData1)
// const[day,setDay]=useState([])
// let auth= useContext(AuthContext);
// const {DateValue} = useContext(searchFoodContextData1)
// const[inputDate,setInputDate]=useState('')
// const[dayId,setDayId]=useState()



//   useEffect(()=>{ // on first load
//     getDay()
//     },[])





//   let getDay = async()=>{ // this are to retrive data from backend
//     console.log(auth.contextData.authToken.access)
//     let response =  await fetch('http://localhost:8000/api/day',{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json', //thisis sending data
//         'Authorization':'Bearer '+ String(auth.contextData.authToken.access)}//can customize in the backedn //sends the auth token to acess data of sepcific usef
//     })
//     let data = await response.json()//gets data and puts into state
//     console.log(data,'data')

//     if(response.status == 200){
//       setDay(data)
//       console.log(data,'data')
//     }else if(response.statusText == 'Unauthorized'){
//       auth.contextData.logOutUser()
//       console.log(data,'data')

//     }
//     console.log(data,'data')
// //issues data doesnt get pulled from the day api, and the data doesn display in json for days 
//   }







//   const createFood = async (date, name, calories, protein, carbs) => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/foods/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           'days':date,
//           'name':name,
//           'calories':calories,
//           'protein':protein,
//           'carbs':carbs,
//         }),
//       });

//       if (response.ok) {
//         console.log('Food created successfully');
//         // Handle success case here
//       } else {
//         console.log('Failed to create food');
//         // Handle error case here
//       }
//     } catch (error) {
//       console.error('Error creating food:', error);
//       // Handle error case here
//     }
//   };













// function changeNum (num){

//   let strNum = num.toString()
//   if(num<10){
//     return '0'+strNum
//   }else{
//     return strNum
//   }
// }


// useEffect(()=>{

//   setInputDate(`${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`)


// },[DateValue])






// const makeDay = ()=>{
//   if(day.length == 0){
//     return(
//       <li>no notes</li>
//     )
//   }else{

//       console.log( inputDate)
//       console.log( day)
//     if(`2024-04-05` == inputDate){
//       console.log('true')
//     }else{
//       console.log('false')
//       console.log(typeof inputDate)

//     }

//   const index = day.findIndex(note => note.date == inputDate)
//   const food = day[index].food_list
//   // setDayId(day[index].id)

//   console.log(food,'food')
//   console.log(dayId,'dayid')

//     if(food !== undefined){
//       return(  
//         food.map((food)=>(
//           <li key={food.id}>{food.name}</li>
//         ))
//       )
//     }
//   }
// }



  return(
    <div>
      <p>you are logged in as</p>
      <ul>
        <button onClick={()=>
          {createFood([curDayID],'pendd', 23, 40,400,300,400)
            console.log(curDayID,'curDayID')
}}> click</button>
      {showDayFoods()} 
      </ul>
    </div>
  )
}