import React,{useState, useEffect, useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function FakePage(){
const[notes,setNotes]=useState([])
let auth= useContext(AuthContext);


useEffect(()=>{ // on first load
  getNotes()
  },[])

  let getNotes = async()=>{ // this are to retrive data from backend
    let response =  await fetch('http://localhost:8000/api/notes',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', //thisis sending data
        'Authorization':'Bearer '+ String(auth.contextData.authToken.access)}//can customize in the backedn //sends the auth token to acess data of sepcific usef
    })
    let data = await response.json()//gets data and puts into state

    if(response.status == 200){
      setNotes(data)
    }else if(response.statusText == 'Unauthorized'){
      auth.contextData.logOutUser()

    }

  
  
  }

const makeNotes = ()=>{

return(  
  notes.map((note)=>(
    <li key={note.id}>{note.body}</li>
  ))
)
}
  return(
    <div>
      <p>you are logged in</p>
      <ul>
      {makeNotes()}
      </ul>
    </div>
  )
}