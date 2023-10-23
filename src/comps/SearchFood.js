

import React,{ChangeEvent,useState, createContext, useRef,useEffect} from "react";
import {useToggle} from './useToggle.js'

// export const SearchFoodContext = createContext();

export const SearchFood=({children,onQuery}) =>{


//react hook can have it render with true or false or the style conditional to toggle display none or blocks
  
const[toggle,setToggle] = useToggle(false)



  const handleClick = () => {

    setToggle(!toggle);
  };


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

let choseFoods = []

onQuery(calVal)


  function updateName(event) {
    setCalVal(calVal+parseInt(event.target.getAttribute('data-calories')))


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
    console.log(event.target.getAttribute('data-calories'))


    setToggle(false)

}



function caloriesAdded(){

  for(let food of choseFoods){
    // caloriesCount +=food.calories
    console.log(food)

  }
}
  function addCountry() {

  
    return (
      
      countryData.map((country) => (
    <li onClick={updateName} name = {country.name} data-calories = {country.calories}>
      <div className="options-data" name = {country.name} data-calories = {country.calories}>
        <div className="options-name" name = {country.name} data-calories = {country.calories}>{country.name}</div>
        <div className="options-calories" calories = {country.calories} data-calories = {country.calories}>{country.calories} cal</div>


        </div>
      </li>

    ))
    
    )
    
  }

  function searchInput (e){

    let arr = []
    let searchedValue = e.target.value.toLowerCase()


    arr = countries.filter((data) =>{return data.name.toLowerCase().startsWith(searchedValue)}).map(data=>data)
    setCountryData(arr.length ==0 ? ["Not Found"]:arr )
   

  console.log(arr)
  console.log(searchedValue)


}

let searchFoodContextData = {
  toggle:toggle

}
  return(


    // <SearchFoodContext.Provider value={{searchFoodContextData}}>
      // {children}


    <div className="search-food-container">
      <div className="select-btn" onClick={handleClick}>{chosen}
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
  )
}