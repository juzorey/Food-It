import React, { useState,useEffect, useContext } from 'react';
import searchFoodContextData1 from './SearchFoodDataContext';
import dayjs from 'dayjs';
import { AuthContext } from '../contexts/AuthContext';
import { ConnectingAirportsOutlined, ControlPointSharp, IndeterminateCheckBoxOutlined } from '@mui/icons-material';
import { get } from 'animejs';

const SearchFoodProvider = ({ children }) => {


  const[backendArray,setBackendArray] = useState([])
  const [head, setHead] = useState(3);
  const [fakeChosen, setFakeChosen] = useState([]); // Initialize with an empty array
  const[globalDivCalArr,setGlobalDivCalArr] = useState([])
  const[update,setUpdate]=useState([])

  const[displayFoodArr,setDisplayFoodArr]=useState([])
  const[displayCarbsArr,setDisplayCarbsArr]=useState([])
  const[displayProArr,setDisplayProArr]=useState([])
  const[displayFatArr,setDisplayFatArr]=useState([])


  const [day,setDay]=useState([]) 
  const[newData,setNewData]=useState([])

  const[DateValue,setDateValue] = useState(dayjs())

  const todayDefaultDate = dayjs()

///// talking to backend



//make it so it creates a new day when a new day starts

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
  const index = day.some(note => note.date == todayDate)
//problem the times are differnt when creating one on django22

    console.log(todayDate,'today 2 ')
    console.log(day, 'today day week')
    console.log(index,'index today')
    console.log(day,'day today')

    const found = day.find((element) => element.date == todayDate)
// issue is the day created is differnt for django and react
    const dateIndex = day.findIndex(note => note.date === inputDate);
    const fucktoday = day.findIndex(note => note.date == todayDate);
    console.log(fucktoday,'fuckday today')

    console.log(found,'found')

if(day.length !==0){
  console.log(dateIndex,'fuck')
    // setCurDayId(day[dateIndex]?.id)
}

  if(day.length !== 0 && today == todayDate && index == false){

        console.log('created when the day data is not empty, todays day matches, todays data is not found in the day array today')

    createDay()


  }
},[day])



  useEffect(()=>{
    let datIndex = `${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`
    setInputDate(`${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`)
    console.log(`${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`,'plan')
    console.log(day,'plan')
    console.log(day.findIndex(note => note.date == inputDate),'plan')

    let index = day.findIndex(note => note.date == datIndex) 
//  this will give you a new date check if its alreayd in days
if(day.length>1){
    setCurDayId(day[index]?.id)
    console.log('changed curday')
}

  },[DateValue])

  useEffect(()=>{// 


    console.log(curDayID,'plan curday')

  },[curDayID])



  useEffect(()=>{ // on first load

        getDay() 


    console.log('getday function called') // this doesnt occurin on page load or there is a delay or it happens ever render
    },[])

 



  


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
  const[newShit,setNewShit]=useState([])
  useEffect(()=>{console.log(newShit,'day fuck')},[newShit])

  
console.log(day,'fuckyou')
  let getDay = async()=>{ // this are to retrive data from backend
    console.log(auth.contextData.authToken.access)
    let response =  await fetch('http://localhost:8000/api/days',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', //thisis sending data
        'Authorization':'Bearer '+ String(auth.contextData.authToken.access)}//can customize in the backedn //sends the auth token to acess data of sepcific usef
    })
    let data = await response.json()//gets data and puts into state
    console.log(data,'data')


    if(response.status == 200){
      setNewShit(['fuck you '])
      


      if(data.length!== 0){
        console.log(data,'sent data')
        setDay(data)


      }else{
        console.log('created on first load when day data is empty today ')
        createDay()
        // setDay(['fuck you '])

      }
      console.log(data,'data')
    }else if(response.statusText == 'Unauthorized'){
      auth.contextData.logOutUser()
      console.log(data,'data')

    }
    console.log(data,'data')
//issues data doesnt get pulled from the day api, and the data doesn display in json for days 
  }

  let getDayNew = async()=>{ // this are to retrive data from backend
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
        setNewData(data)
      console.log(data,'new data')
    }else if(response.statusText == 'Unauthorized'){
      auth.contextData.logOutUser()
      console.log(data,'fuck you data')

    }
    console.log(data,'data')
//issues data doesnt get pulled from the day api, and the data doesn display in json for days 
  }


const[weeklyData, setWeeklyData]= useState({
  series: [
    {
      name: 'TotalCal',
      data: [183, 124, 115, 85, 143, 143, 96],
    },
    
  // {
  //   name: 'Carbs',
  //   data: [183, 124, 115, 85, 143, 143, 96],
  // },
  // {
  //   name: 'Fat',
  //   data: [95, 84, 72, 44, 108, 108, 47],
  // },
  // {
  //   name: 'Protein',
  //   data: [95, 84, 72, 44, 108, 108, 47],
  // }
],
})

// useEffect(()=>{
//   showWeeklyData()
// },[newData,day])

const showWeeklyData = ()=>{
  console.log(day,'weekly popped day')

  let newArr = []
  for(let i = 7; i>0;i--){
    
    newArr.push(newData.pop())
    console.log(newArr,'weekly popped')
  }

  if(newArr[0] !== undefined){


    // let newArrCarbs = newArr.map((item)=>item.food_list)
    // console.log(newArrCarbs,'weekly popped carbs')
    // console.log(newArr,'weekly popped carbs new arr')

    // newArrCarbs.forEach((item)=>{
    //   if(item.length <! 0){
    //     console.log('empty array')

    //   } else if(item.legnth >!0 ){
    //     item.forEach((macro)=>{
    //       macro.carbs
    //     })
    //   }
    // })


  }

  //definietly could be easier if i have it calculated and saved per day as its own data and have it called 



  // setWeeklyData(
  //   {
  //     name: 'Carbs',
  //     data: newArrCarbs,
  //   },
  //   {
  //     name: 'Fat',
  //     data: newArrCarbs,
  //   },
  //   {
  //     name: 'Protein',
  //     data: newArrCarbs,
  //   },
  // )



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


  const updateTotalCal = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/days/${curDayID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'totalCal':totalCal

        }),
      });

      if (response.ok) {
        console.log(curDayID,'updated total cal successfully');
        // Handle success case here
      } else {
        console.log('Failed to update totalCal');
        // Handle error case here
      }
    } catch (error) {
      console.error('Error updating totalCal:', error);
      // Handle error case here
    }
  };


useEffect(()=>{

  getNewFoods()
console.log('get new foods')
console.log(newData, 'get newData foods')

},[newData])



  const getNewFoods = ()=>{
    if(newData.length == 0){
      return(
        <li>no notes</li>
      )
    }else{
      const index = newData.findIndex(note => note.date === inputDate);

      const food = newData[index]?.food_list; // Using optional chaining to avoid errors if day[index] is undefined

      // console.log(newData[index].id,'localDay newData Foods')
      console.log(food, 'data food newData Foods');
      console.log(index, 'data index');
      console.log(day, 'data day newData Foods');
  
  
  
      if (food) {
        const uniqueFoods = Array.from(new Set(food.map(item =>item.id))); // this makes it unique 

        let newArr = uniqueFoods.map(id => food.find(item => item.id === id))
      
        let caloriesArr = newArr.map((item) => item.calories)
        let carbsArr = newArr.map((item) => item.carbs)
        let proArr = newArr.map((item) => item.protein)
        let fatArr = newArr.map((item) => item.fat)

        setDisplayCarbsArr(carbsArr)
        setDisplayProArr(proArr)
        setDisplayFatArr(fatArr)
        setDisplayFoodArr(caloriesArr)
        console.log(newArr,'new foods')
        }
  
      
    }
  }

  const DeleteFood = async(foodId)=>{ 


      let response =  await fetch(`http://127.0.0.1:8000/api/foods/${foodId}`,{
        method: 'DELETE',
  })
  
      if(response.status == 204){

        getDayNew()
      }else if(response.statusText == 'Unauthorized'){
        // auth.contextData.logOutUser()

  
      }

  //issues data doesnt get pulled from the day api, and the data doesn display in json for days 
    }
    

      



  

const showDayFoods = ()=>{
  if(day.length == 0){
    return(
      <li>no notes</li>
    )
  }else{


    const index = day.findIndex(note => note.date == inputDate)
    const food = day[index].food_list
    console.log(food,'fake food')
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
const [totalCal,setTotalCal]=useState(0)
const [totalCarb,setTotalCarb]=useState(0) 
const [totalPro,setTotalPro]=useState(0)
const [totalFat,setTotalFat]=useState(0)


useEffect(()=>{
  let todayDate = `${DateValue.$y}-${changeNum(DateValue.$M+1)}-${changeNum(DateValue.$D)}`

  day.sort((a, b) => new Date(a.date) - new Date(b.date)); // crazy idk how this works

  console.log(day,'day sorted')
  const fucktoday = day.findIndex(note => note.date == todayDate);
    let i =  7
    let newIndex = fucktoday
//this bullshit cant find totalCal sometimes
    let weeklyTotalCal= []
    while(i>0){
       weeklyTotalCal.unshift(day[newIndex]?.totalCal)

       console.log(weeklyTotalCal,'week total')
       console.log(newIndex,'week total')

       newIndex--
      i--
    }


  setWeeklyData({
    series: [
      {
        name: 'TotalCal',
        data: weeklyTotalCal,
      }
  ],
  }

  )
},[day, totalCal]) // this sucks
useEffect(()=>{
  if(totalCal !=0){


  setChartData({
    series: [
      {
        name: 'Today',
        data: [totalCarb,totalFat,totalPro],
      },
    ],
  })
}
},[totalCal])



useEffect(() => {
  if (displayFoodArr !== undefined) {

    setTotalCal(addArr(displayFoodArr,0))
    setTotalCarb(addArr(displayCarbsArr,0))
    setTotalPro(addArr(displayProArr,0))
    setTotalFat(addArr(displayFatArr,0))

  }


  console.log(displayFoodArr, 'displayFoodArr new ');
  console.log(displayCarbsArr, 'displayFoodArr  carbs new ');
  console.log(displayProArr, 'displayFoodArr  pro new ');
  console.log(displayFatArr, 'displayFoodArr  fat new ');

  
}, [displayFoodArr]);


useEffect(() => {

  console.log(totalCal, 'displayFoodArr totalCal');
  console.log(totalCarb, 'displayFoodArr  totalCarb');
  console.log(totalPro, 'displayFoodArr  totalPro');
  console.log(totalFat, 'displayFoodArr  totalFat');
  
  updateTotalCal()
}, [totalCal]);





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


    // if (type==1){


    //   return arrTotalOne  - queryOne
    // }   
    // else if (type ==2){
    //   return arrTotalOne - queryCarbThree
    // }
    // else if(type ==3){
    //   return arrTotalOne - queryFat

    // }
    // else if (type ==4){
    //   return arrTotalOne - queryPro

    // }
    // else{
      // setResult(arrTotalOne)
      return arrTotalOne

    // }
}

















































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
    <searchFoodContextData1.Provider value={{ chartData1, setChartData,carbData, setCarbData,head,setHead, objextA,fakeChosen,setFakeChosen,globalDivCalArr,setGlobalDivCalArr,DateValue,setDateValue,showDayFoods,createFood,setCurDayId, curDayID, inputDate,day,backendArray,setBackendArray,update,setDisplayFoodArr,totalCal,setTotalCal,getNewFoods, getDayNew, DeleteFood, newData, totalCarb, totalFat, totalPro,weeklyData}}>
      {children}
    </searchFoodContextData1.Provider>
  );
};

export default SearchFoodProvider;