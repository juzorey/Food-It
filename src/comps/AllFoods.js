import { useState, useEffect } from "react";
export const AllFoods = ()=>{

const [foods, setFoods] = useState([]) 

//not specifc to user

    useEffect(()=>{
      (
    async()=>{
      try {
        const response = await fetch('http://localhost:8000/api/foods/', {
          headers: {'Content-Type': 'application/json'},
         credentials: 'include',
        
     });
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        // ✅ call response.json() here
        const result = await response.json();
        console.log(result);
        setFoods(result)
     

      } catch (err) {
        console.log(err);
      }
    
    }
    )()},[])



      return(
    <div className="foods-container">
      {
      foods.map((food, index) => (
    <div key={index}>
      <div className="all-foods">
        {food.food_name}
        <span>        {`${food.image_url} kcal`}
</span>
      </div>


    </div> 
  ))
  }
  </div>
      )

  
}