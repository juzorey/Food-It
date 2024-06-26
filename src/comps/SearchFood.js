

import React,{ChangeEvent,useState, createContext, useContext, useRef,useEffect} from "react";
import {useToggle} from './useToggle.js'
import {foodDataContext}from './FoodNutrionApi.js'
import Stacked from "./Stacked.js";
import { Routes,Route} from 'react-router-dom'

// export const SearchFoodContext = createContext();
export const SearchFoodContext = createContext()

export const SearchFood=({children,onQueryOne,onQueryTwo, onQueryThree}) =>{
  const foodNutrionApiData= useContext(foodDataContext)





//react hook can have it render with true or false or the style conditional to toggle display none or blocks
  
const[toggle,setToggle] = useToggle(false)
const[countDown,setCountDown]=useState(true)


  const handleClick = () => {

    setToggle(!toggle);
  };

  const attributes = {
    onClick:handleClick
  }

  const wrapper = document.querySelector(".search-food-container"),
  selectBtn = document.querySelector('.select-btn'),
  options = document.querySelector('.options')
  const search = document.querySelector('#search')



  let countries = [
    {
      id:1,
      name:'egg',
      calories:70,
      serving:'1'  
  },
  {
    id:2,
    name:'avocado',
    calories:150,
    serving:'.5'  
},
{
  id:3,
  name:'cheeseburger',
  calories:254,
  serving:'1'  
},
{
  id:4,
  name:'chicken nuggets',
  calories:30,
  serving:'1'  
},
{
  id:5,
  name:'ice cream',
  calories:150,
  serving:'.5'  
},

  ]

  const[chosen,setChosen] = useState('Select Food')
  const[countryData,setCountryData] = useState(countries)
  const [inputText, setInputText] = useState("");
  const[calVal,setCalVal] = useState(0)
  const[foodObject,setFoodObject]=useState({0:0})

let choseFoods = []
let change = useRef()

// maybe use a stack
onQueryOne(foodObject)



  function updateName(event) {


    setCalVal(9)




    setChosen(
      <div className="space-between">
        <span className="">
        {event.target.getAttribute('name')}

        </span>
        <span className="">
        {event.target.getAttribute('data-calories')} cal

        </span>
      </div>
    )

   
    setCountryData(countries)
    console.log(event.target.getAttribute('name'))
    let val = parseInt(event.target.getAttribute('data-calories'))
    let pro = parseInt(event.target.getAttribute('protein'))
    let carb = parseInt(event.target.getAttribute('carb'))
    let fat = parseInt(event.target.getAttribute('fat'))

    let object = {
      'serving':1,
      'calories':val,
      'protein':pro,
      'carbs':carb,
      'fat':fat,
    } 
    console.log(val)
    setFoodObject(object)
    console.log(object )

    setCalVal(val)



    console.log(event.target.getAttribute('data-calories'))



    setToggle(!toggle)
    // setCountDown(false)
    // console.log(change.current.onclick)//will use useRef later for updating the index valures 
    // change.current
}



// function caloriesAdded(){

//   for(let food of choseFoods){
//     // caloriesCount +=food.calories
//     console.log(food)

//   }
// }

let dataArr =foodNutrionApiData.foodApiData.foodDataArr
// per serving ( 4g)  pro: 4g carb: 4g fat: 4g
  function addCountry() {
    console.log(dup(dataArr))

  
    return (
      dataArr.length!==1? 
      
      dataArr.map((food) => (


    <li onClick={updateName}  protein = {food.food.nutrients.PROCNT} carb ={food.food.nutrients.CHOCDF} 
    fat ={food.food.nutrients.FAT} name = {food.food.label?1:0} data-calories = {food.food.nutrients.ENERC_KCAL}>
      <div className="options-data" protein = {food.food.nutrients.PROCNT} carb ={food.food.nutrients.CHOCDF} 
        fat ={food.food.nutrients.FAT} name = {food.food.label} data-calories = {food.food.nutrients.ENERC_KCAL}>
        <div className="options-name"  protein = {food.food.nutrients.PROCNT} carb ={food.food.nutrients.CHOCDF} 
        fat ={food.food.nutrients.FAT} name = {food.food.label} data-calories = {food.food.nutrients.ENERC_KCAL}>{food.food.label}</div>
        <div className="options-calories" protein = {food.food.nutrients.PROCNT} carb ={food.food.nutrients.CHOCDF} 
        fat ={food.food.nutrients.FAT}
        calories = {food.food.nutrients.ENERC_KCAL} data-calories = {food.food.nutrients.ENERC_KCAL}>{food.food.nutrients.ENERC_KCAL} cal</div>


        </div>
      </li>

    ))
         :0
    )
    
  }


  function dup(data){
    return [...new Set(data)]
}
  function searchInput (e){



    let arr = []
    let searchedValue = e.target.value.toLowerCase()

    foodNutrionApiData.foodApiData.foodInfo(searchedValue)// has to change for optimization



    arr = countries.filter((data) =>{return data.name.toLowerCase().startsWith(searchedValue)}).map(data=>data)
    setCountryData(arr.length ==0 ? ["Not Found"]:arr )
   

  console.log(arr)
  console.log(searchedValue)


}

let searchFoodContextData = {
  toggle:toggle

}
  return(
    <SearchFoodContext.Provider value={foodObject}>
      <Stacked/>
{/* <Routes>
  <Route path="/charts" element ={<Charts/>}/>
</Routes> */}

    <div className="search-food-container">
      <div className="select-btn" {...(countDown? {...attributes} :{})}>{chosen}
      </div>


    {toggle && (
 <div className="content">
 <div className="search">
   <input type="text" className="search-box" placeholder="search" onKeyUp={searchInput}></input>
 </div>
 <ul className="options">
    {addCountry()}

 
 </ul>
</div>

    )}
     {}

    </div>
    // {/* </SearchFoodContext.Provider> */}

    </SearchFoodContext.Provider>
  )
}