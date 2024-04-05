import React,{useState, useEffect, useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";


export default function FakePage(){
const[notes,setNotes]=useState([])
let auth= useContext(AuthContext);


useEffect(()=>{ // on first load
  getNotes()
  },[])

  let getNotes = async()=>{ // this are to retrive data from backend
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
      setNotes(data)
      console.log(data,'data')
    }else if(response.statusText == 'Unauthorized'){
      auth.contextData.logOutUser()
      console.log(data,'data')

    }
    console.log(data,'data')
//issues data doesnt get pulled from the day api, and the data doesn display in json for days
  
  
  }






const makeNotes = ()=>{
const index = notes.findIndex(note => note.date === '2024-04-02');
const food = notes[index].food_list

return(  
  food.map((note)=>(
    <li key={note.id}>{note.name}</li>
  ))
)
}
  return(
    <div>
      <p>you are logged in as</p>
      <ul>
      {makeNotes()}
      </ul>
    </div>
  )
}