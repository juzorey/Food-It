import React,{useState, useContext,createContext, useEffect} from "react";

export const foodDataContext = createContext()

export const FoodNutrionApi=({children})=>{

  
const [foodData,setFoodData] = useState()
let dataArr = []

let[foodDataArr, setfoodDataArr] = useState([3])
let fakeArr = foodDataArr
const foodInfo = async (info)=>{
  // e.preventDefault()
  console.log(info)
  const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${info}&nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '695f94a9e2mshcc83a34a2c24bf7p1d2529jsnfab0b5eddbbd',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.hints,'result hints');
    dataArr = result.hints
    //maybe i do  a setinternval
     if(dataArr.length!=0)setfoodDataArr(dataArr)

    console.log(foodDataArr)
    // console.log(result.parsed[0].food.nutrients);
    // console.log(result.parsed[0].food.nutrients.ENERC_KCAL);
    setFoodData(result.parsed[0].food.nutrients.ENERC_KCAL);
    console.log(foodData +' cals')

  } catch (error) {
    console.error(error);
  }
  


}
foodInfo()
const foodApiData ={
  foodData:foodData,
  fake:'false',
  foodDataArr:foodDataArr,
  fakeArr:fakeArr,
  dataArrFake:dataArr,


  foodInfo:foodInfo
}


return (
  <foodDataContext.Provider value={{foodApiData}}>

    {children}
  </foodDataContext.Provider >
)
}