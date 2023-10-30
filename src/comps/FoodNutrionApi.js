import React,{useState, useContext,createContext} from "react";

export const foodDataContext = createContext()

export const FoodNutrionApi=({children})=>{

  
const [foodData,setFoodData] = useState()

const foodInfo = async ()=>{
  // e.preventDefault()
  // const url = `https://food-nutrition-information.p.rapidapi.com/foods/search?query=${e.target.food.value}&pageSize=1&pageNumber=1&brandOwner=Kar%20Nut%20Products%20Company`;
  const url = `https://food-nutrition-information.p.rapidapi.com/foods/search?query=cheese&pageSize=1&pageNumber=1&brandOwner=Kar%20Nut%20Products%20Company`;

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
    console.log(result)
    console.log(result.foods[0].foodNutrients[3].value);
    setFoodData(result.foods[0].foodNutrients[3].value)
  } catch (error) {
    console.error(error);
  }

}
foodInfo()
const foodApiData ={
  foodData:foodData,
  fake:'false',

  foodInfo:foodInfo
}


return (
  <foodDataContext.Provider value={{foodApiData}}>

    {children}
  </foodDataContext.Provider >
)
}