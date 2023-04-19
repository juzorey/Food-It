import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import Home  from './comps/Home.js';
import {Login}  from './comps/Login.js';
import { useEffect, useState } from 'react';
import './App.css'

function App() {



 
  const[name,setName] =useState('')

  useEffect(()=>{
(
  async()=>{


    const response = await fetch('http://localhost:8000/api/user/', {
       headers: {'Content-Type': 'application/json'},
      credentials: 'include',
     
  });
const content = await response.json();
setName(content.name)


  }
)(

)
},[])


// const logout = async () => {


//   await fetch('http://localhost:8000/api/logout/', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     credentials: 'include'
// });

// }
// let menu
// if(name === ''){
//   menu = ()
// }
// else{
//   menu = ()
// }



  return (
    <div className="App">

    <Routes>
      <Route path = '/' element={<Home name={name } />} />
      <Route path = '/login' element={<Login />} />

      {/* <Route path="/login" element={<Login />} /> */}

    </Routes>

      
    </div>
  );
}

export default App;

