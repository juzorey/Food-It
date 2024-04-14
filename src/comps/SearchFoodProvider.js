import React, { useState,useEffect, useContext } from 'react';
import searchFoodContextData1 from './SearchFoodDataContext';
import dayjs from 'dayjs';
import { AuthContext } from '../contexts/AuthContext';
import { ConnectingAirportsOutlined, IndeterminateCheckBoxOutlined } from '@mui/icons-material';

const SearchFoodProvider = ({ children }) => {

  const [head, setHead] = useState(3);
  const [fakeChosen, setFakeChosen] = useState([]); // Initialize with an empty array
  const[globalDivCalArr,setGlobalDivCalArr] = useState([])


  const[DateValue,setDateValue] = useState(dayjs())

  const todayDefaultDate = dayjs()

///// talking to backend



//make it so it creates a new day when a new day starts

  const [day,setDay]=useState([]) 
  let [curDayID,setCurDayId]=useState() 
  const[inputDate,setInputDate]=useState('')

  let auth= useContext(AuthContext);




function changeNum (num){

  let strNum = num.toString()
  if(num<10){
    return '0'+strNum
  }else{
    return strNum
  }
}
useEffect(()=>{
  let today = `${todayDefaultDate.$y}-${changeNum(todayDefaultDate.$M+1)}-${changeNum(todayDefaultDate.$D)}`
  console.log(today,'today1')
  let todayDate = `${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`
  console.log(todayDate,'today2')
  console.log(day, 'today day week')
  const index = day.some(note => note.date == todayDate)





    console.log(index,'index today')


  if(today == todayDate && index == false && day.length >1){

        console.log('today')

    createDay()

  }
},[day])


  useEffect(()=>{

    setInputDate(`${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`,'plan')
    console.log(`${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`,'plan')
    console.log(day,'plan')
    console.log(day.findIndex(note => note.date == inputDate),'plan')


//  this will give you a new date check if its alreayd in days
if(day.length>1){
    setCurDayId(day[day.findIndex(note => note.date == inputDate)].id)
}

  },[DateValue])

  useEffect(()=>{ // on first load
    getDay()
    },[])

  useEffect(()=>{// 

    const index = day.findIndex(note => note.date == inputDate)

    // setCurDayId(day[index].id)
    console.log(day,'day')

  },[day])




  


  const createDay = async () => {

    try {

      const response = await fetch('http://127.0.0.1:8000/api/days/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'user':auth.contextData.user.user_id,
        
        }),
      });

      if (response.ok) {
        console.log('Food created successfully');
console.log(curDayID,'curDayID')

        // Handle success case here
      } else {
        console.log('Failed to create food');
console.log(curDayID,'curDayID')

        // Handle error case here
      }
    } catch (error) {
      console.error('Error creating food:', error);
console.log(curDayID,'curDayID')

      // Handle error case here
    }
  };

  let getDay = async()=>{ // this are to retrive data from backend
    console.log(auth.contextData.authToken.access)
    let response =  await fetch('http://localhost:8000/api/day',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', //thisis sending data
        'Authorization':'Bearer '+ String(auth.contextData.authToken.access)}//can customize in the backedn //sends the auth token to acess data of sepcific usef
    })
    let data = await response.json()//gets data and puts into state
    console.log(data,'data')

    if(response.status == 200){
      setDay(data)
      console.log(data,'data')
    }else if(response.statusText == 'Unauthorized'){
      auth.contextData.logOutUser()
      console.log(data,'data')

    }
    console.log(data,'data')
//issues data doesnt get pulled from the day api, and the data doesn display in json for days 
  }


  const createFood = async (date, name, calories, protein, carbs,fat) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/foods/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'days':date,
          'name':name,
          'calories':calories,
          'protein':protein,
          'carbs':carbs,
          'fat':fat,

        }),
      });

      if (response.ok) {
        console.log('Food created successfully');
        // Handle success case here
      } else {
        console.log('Failed to create food');
        // Handle error case here
      }
    } catch (error) {
      console.error('Error creating food:', error);
      // Handle error case here
    }
  };




const showDayFoods = ()=>{
  if(day.length == 0){
    return(
      <li>no notes</li>
    )
  }else{


    const index = day.findIndex(note => note.date == inputDate)
    const food = day[index].food_list

    if(food !== undefined){
      return(  
        food.map((food)=>(
          <li key={food.id}>{food.name}</li>
        ))
      )
    }else{
      return(
        <li>no notes</li>
      )
    }
  }
}



//////// END talking to backend



















































  const [chartData1, setChartData] = useState({
    series: [
      {
        name: 'Today',
        data: [124, 115, 30],
      },
    ],
  });
  const [carbData, setCarbData] = useState(300)

  
  const[DataObject3,setDataObject3] =useState( 
{
      calGoal: 2000,
      calConsumed: 900,

        totalConsumedCal:[],
        calorieArrayLog:[],
        loglog:[],
        displayLog:[],
        calorieArray:[10],
        carbArray:[],
        proteinArray:[],
        fatArray:[],
      
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },    
    
  }
  )
  const [DataObject2,setDataObject2] =useState({
      calGoal: 1000,
      calConsumed: 900,

        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        displayLog:[],
        loglog:[],

        carbArray:[],
        proteinArray:[],
        fatArray:[],

      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
  })
const [DataObject0,setDataObject0] =useState({
      calGoal: 0,
      calConsumed: 400,
      breakfastLog: {
        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        displayLog:[],
        loglog:[],

        carbArray:[],
        proteinArray:[],
        fatArray:[]
      },
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
})
const [DataObject1,setDataObject1] =useState({
      calGoal: 50,
      calConsumed: 1500,
      breakfastLog: {
        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        displayLog:[],

        loglog:[],

        carbArray:[],
        proteinArray:[],
        fatArray:[]
      },
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
})
const [DataObject4,setDataObject4] =useState({
      calGoal:40,
      calConsumed: 1500,
      breakfastLog: {
        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        displayLog:[],
        loglog:[],


        carbArray:[],
        proteinArray:[],
        fatArray:[]
      },
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
})
const [DataObject5,setDataObject5] =useState({
      calGoal: 30,
      calConsumed: 1500,
      breakfastLog: {
        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        loglog:[],

        displayLog:[],

        carbArray:[],
        proteinArray:[],
        fatArray:[]
      },
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
})
const [DataObject6,setDataObject6] =useState({
      calGoal: 20,
      calConsumed: 1500,
      breakfastLog: {
        totalConsumedCal:[],
        calorieArrayLog:[1],
        calorieArray:[1],
        displayLog:[],
        loglog:[],

        carbArray:[],
        proteinArray:[],
        fatArray:[]
      },
      macros: {
        carbs: 0,
        protein: 0,
        fat: 0,
      },
})
const objextA = {
  3:[DataObject3,setDataObject3],
  2:[DataObject2,setDataObject2],
  0:[DataObject0,setDataObject0],
  1:[DataObject1,setDataObject1],
  4:[DataObject4,setDataObject4],
  5:[DataObject5,setDataObject5],
  6:[DataObject6,setDataObject6],

}
  




  return (
    <searchFoodContextData1.Provider value={{ chartData1, setChartData,carbData, setCarbData,head,setHead, objextA,fakeChosen,setFakeChosen,globalDivCalArr,setGlobalDivCalArr,DateValue,setDateValue,showDayFoods,createFood, curDayID}}>
      {children}
    </searchFoodContextData1.Provider>
  );
};

export default SearchFoodProvider;