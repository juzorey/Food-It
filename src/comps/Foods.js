import axios from "axios"
import { useNavigate } from "react-router-dom"
import React, {useEffect, SyntheticEvent, useState} from 'react';
import jwt_decode from "jwt-decode";
import { FaTrashAlt } from 'react-icons/fa';

export const Foods = (props) => {
    const [email, setEmail] = useState('');
    const [food_name, setFood] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [user, setUser] = useState('');
    const[user_id, setUser_id] = useState(user);
    const [foodId,setFoodId] = useState('');
    const [counter, setCounter] = useState(25);



    const navigate = useNavigate()




    useEffect(()=>{
      (
        async()=>{
      
      
          const response = await fetch('http://localhost:8000/api/user/', {
             headers: {'Content-Type': 'application/json'},
            credentials: 'include',
           
        });
        
      const content = await response.json();
      setUser(content.id)

     
      
        }
      
    
      )(
      
      )
      },[])

  
 


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
setCounter(counter => counter+ 1)

     const response =   await fetch('http://localhost:8000/api/foods/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
              user,
              food_name,
              image_url
            })

        });
      


        //   try {
        //     const response = await axios.post('http://localhost:8000/api/login/', {
        //       email,
        //       password
        //     }, {
        //       headers: { 'Content-Type': 'application/json' },
        //       withCredentials: true,
        //     }
        //     );
      
        //     const token = response.data.jwt
        //     const decodedToken = jwt_decode(token)
        //     console.log(decodedToken)


        // } catch (error) {
        //   console.error(error);
        //   console.log(error.response.data)
        // }
        const content = await response.json()
        props.setName(content.name)

  
        
          
      }
    

      const [fruits, setFruits] = useState([]);
      const[count,setCount]=useState(36)
    


const cardTemaplate = (index)=>{
  let card = (

<div key ={index}>
  <form class="profile-food-entries" onSubmit={submit}>
    <div className="cube1">
      {/* <button class="sign" type="click" onClick={update}>update</button>      */}
      <button class="sign" type="button" onClick={()=>update(index)}>update</button>    
      <button class="sign" type="submit" onClick={()=>submit}>post</button>                  
              
             
    </div>
    <div className="cube2">
      {foodId}{index}
      <input type="text" placeholder="food name" onChange={e => setFood(e.target.value)}/>
    </div>
    <div className="cube3">
      <input id="kcal" type="text" placeholder="kcal" onChange={e => setImageUrl(e.target.value)}/>
      <div className="trash-can"><span><FaTrashAlt onClick={() => removeCards(index)}
/></span></div>
   </div>
  
 
</form>


</div>




  )
  return(card)

}



const addCard=()=>{

  setCount(count+1) 
  setFruits([...fruits,count])
  console.log(fruits)
  console.log(count)

}



const removeCards = (index) => {

  
  (
async()=>{
  const newFruits = fruits.filter((_, i) => i !== index);
  setFruits(newFruits);
  console.log(newFruits);
  setCount(count-1)
  let newId = index+39

  const response = fetch(`http://localhost:8000/api/fooddetails/${newId}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'

});

})()



};


const showNewCards = ()=>{

  return(
  fruits.map((fruit, index) => (
    <div key={index}>
      {cardTemaplate(index)} 

    </div> 
  ))
  )
}

const update =(id)=>{


  // e.preventDefault();

  // const formData = new FormData()
  // formData.append('title', title)
  // formData.append('turnip_price', turnip_price)
  // formData.append('description', description)
  // formData.append('post_picture', post_picture)

  // const requestBody = {
  //   ...formData,
  //   user: user
  // }

  (
    
    async()=>{
      let newId = id+39

  const res = fetch(`http://localhost:8000/api/fooddetails/${newId}`, {
            method: 'Put',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
              id: id,
              user,
              user_id,
              food_name,
              image_url
            })

        });
        console.log(id, 'er')
}


)()


}



    return (
       
<div >


  {/* <form class="profile-food-entries" onSubmit={submit}>
    <div className="cube1">
      <button class="sign" type="click" onClick={update}>update</button>     
      <button class="sign" type="submit">+</button>                  
             
    </div>
    <div className="cube2">
      {foodId}
      <input type="text" placeholder="food name" onChange={e => setFood(e.target.value)}/>
    </div>
    <div className="cube3">
      <input id="kcal" type="text" placeholder="kcal" onChange={e => setImageUrl(e.target.value)}/>
   
   </div>


   
 
</form> */}
<div>

{showNewCards()}

</div>

<button className="add-card-btn" onClick={addCard}> + Add Food</button>



</div>
    );
};


