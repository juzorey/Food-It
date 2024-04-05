import React, { useState,useEffect } from 'react';
import searchFoodContextData1 from './SearchFoodDataContext';
import dayjs from 'dayjs';

const SearchFoodProvider = ({ children }) => {

  const [head, setHead] = useState(3);
  const [fakeChosen, setFakeChosen] = useState([]); // Initialize with an empty array
  const[globalDivCalArr,setGlobalDivCalArr] = useState([])


  const[DateValue,setDateValue] = useState(dayjs())

// function InsertDiv(arr,head){
//   objextA[head][1](prev => ({...prev, calorieArrayLog: arr}));

// }
// useEffect(()=>{
//   InsertDiv(globalDivCalArr,head)
//   console.log(objextA[head][0].calorieArrayLog,'calorieArrayLog')
// },[head])



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
    <searchFoodContextData1.Provider value={{ chartData1, setChartData,carbData, setCarbData,head,setHead, objextA,fakeChosen,setFakeChosen,globalDivCalArr,setGlobalDivCalArr,DateValue,setDateValue}}>
      {children}
    </searchFoodContextData1.Provider>
  );
};

export default SearchFoodProvider;